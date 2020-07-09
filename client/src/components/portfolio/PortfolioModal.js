import React from 'react';
import '../style/portfolioModal.css';
import Chart from 'chart.js';
import StyledRadio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
const url = 'https://15.164.102.207:4000/';

class PortfolioModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      steps: 0,
      job: null,
      ability: null,
      abilityText: '',
      company: null,
      developer: null,
      interest: null,
      allData: {},
      id: null,
    };
    this.handleSteps = this.handleSteps.bind(this);
    this.getAllData = this.getAllData.bind(this);
    this.setAllData = this.setAllData.bind(this);
    this.stepZero = this.stepZero.bind(this);
    this.getThisWeek = this.getThisWeek.bind(this);
    this.getParticipants = this.getParticipants.bind(this);
    this.stepOne = this.stepOne.bind(this);
    this.setId = this.setId.bind(this);
    this.setAnswer = this.setAnswer.bind(this);
    this.getJobs = this.getJobs.bind(this);
    this.stepTwo = this.stepTwo.bind(this);
    this.setAnswerByOrder = this.setAnswerByOrder.bind(this);
    this.stepThree = this.stepThree.bind(this);
    this.getAverage = this.getAverage.bind(this);
    this.getYourAbility = this.getYourAbility.bind(this);
    this.stepFour = this.stepFour.bind(this);
    this.stepFive = this.stepFive.bind(this);
    this.getCompany = this.getCompany.bind(this);
    this.stepSix = this.stepSix.bind(this);
    this.stepSeven = this.stepSeven.bind(this);
    this.getInterest = this.getInterest.bind(this);
    this.stepEight = this.stepEight.bind(this);
  }

  handleSteps() {
    let present = this.state.steps;
    if (present < 8) {
      this.setState({
        steps: present + 1,
      });
    } else {
      this.setState({
        steps: 0,
      });
    }
  }

  componentDidMount() {
    this.getAllData();
  }

  getAllData() {
    fetch(url + 'data', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((data) => {
        if (typeof data === 'object') {
          this.setAllData(data);
          this.stepZero();
        }
      });
  }

  setAllData(allData) {
    this.setState({
      allData,
    });
  }

  componentDidUpdate() {
    if (this.state.steps === 2) {
      this.stepTwo();
    } else if (this.state.steps === 4) {
      this.stepFour();
    } else if (this.state.steps === 6) {
      this.stepSix();
    } else if (this.state.steps === 8) {
      this.stepEight();
    }
  }

  stepZero() {
    let labels = this.getThisWeek();
    let data = this.getParticipants(labels);

    var ctx = document.getElementById('stepZeroLineChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: '참여자 수',
            backgroundColor: 'rgba(255, 199, 3, 0.6)',
            borderColor: 'rgba(255, 199, 3, 0.6)',
            data,
          },
        ],
      },
      options: {
        responsive: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                userCallback: function (label) {
                  if (Math.floor(label) === label) {
                    return label;
                  }
                },
              },
            },
          ],
        },
      },
    });
  }

  getThisWeek() {
    let week = ['일', '월', '화', '수', '목', '금', '토'];
    let result = [];
    let day = 0;
    while (day < 5) {
      let date = new Date(Date.now() - day * 60 * 60 * 24 * 1000);
      date =
        date.getMonth() + 1 + '/' + date.getDate() + ' ' + week[date.getDay()];
      result.unshift(date);
      day += 1;
    }
    return result;
  }

  getParticipants(dateArr) {
    let participants = dateArr.map((day) => {
      let count = 0;
      if (this.state.allData.length > 0) {
        this.state.allData.forEach((obj) => {
          let month =
            obj.createdAt.slice(5, 7)[0] === '0'
              ? obj.createdAt.slice(5, 7)[1]
              : obj.createdAt.slice(5, 7);
          let date =
            obj.createdAt.slice(8, 10)[0] === '0'
              ? obj.createdAt.slice(8, 10)[1]
              : obj.createdAt.slice(8, 10);
          let format = month + '/' + date;
          if (format === day.slice(0, -2)) {
            count += 1;
          }
        });
      }
      return count;
    });
    return participants;
  }

  stepOne() {
    if (this.state.job) {
      fetch(url + 'job', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          job: this.state.job,
        }),
      })
        .then((res) => {
          if (res.status === 200) {
            return res.json();
          }
        })
        .then((data) => {
          if (typeof data === 'object') {
            this.setId(data.id);
          }
        });
      this.handleSteps();
    }
  }

  setId(id) {
    this.setState({
      id,
    });
  }

  setAnswer(state, value) {
    if (state === 'job') {
      this.setState({
        job: value,
      });
    } else if (state === 'lunch') {
      this.setState({
        lunch: value,
      });
    } else if (state === 'company') {
      this.setState({
        company: value,
      });
    } else if (state === 'developer') {
      this.setState({
        developer: value,
      });
    } else if (state === 'interest') {
      this.setState({
        interest: value,
      });
    }
  }

  getJobs() {
    let jobs = ['programmer', 'backoffice', 'pm', 'etc'];
    let result = jobs.map((job) => {
      let count = 0;
      this.state.allData.forEach((obj) => {
        if (job === obj.job) {
          count += 1;
        }
      });
      if (this.state.job === job) {
        count += 1;
      }
      return count;
    });
    return result;
  }

  stepTwo() {
    var ctxTwo = document.getElementById('stepTwoPieChart').getContext('2d');
    new Chart(ctxTwo, {
      type: 'doughnut',
      data: {
        datasets: [
          {
            data: this.getJobs(),
            backgroundColor: ['pink', 'lightgreen', 'skyblue', 'gold'],
          },
        ],
        labels: ['소프트웨어 개발', '경영지원', '기획/운영', '기타'],
      },
      options: {},
    });
  }

  setAnswerByOrder(value) {
    let result = this.state.ability;
    if (!result) {
      result = [];
    }
    let index = result.indexOf(value);
    if (index === -1) {
      result.push(value);
    } else {
      result.splice(index, 1);
    }
    this.setState({
      ability: result,
    });
    let text = result.join(' - ');
    this.setState({
      abilityText: text,
    });
  }

  stepThree() {
    let abilityObj = {
      '커뮤니케이션 능력': 'communication',
      '학습 능력': 'learn',
      '현재의 실력': 'current',
      개발속도: 'speed',
      '업무 관리 능력': 'managing',
    };
    let { id, ability } = this.state;
    let EngAbility = ability.map((ele) => {
      return abilityObj[ele];
    });
    if (ability && ability.length === 5) {
      fetch(url + 'ability', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          ability: EngAbility,
        }),
      })
        .then((res) => {
          if (res.status === 200) {
            return res.json();
          }
        })
        .then((data) => {
          if (typeof data === 'object') {
            this.handleSteps();
          }
        });
    }
  }

  getAverage() {
    let labels = ['communication', 'learn', 'current', 'speed', 'managing'];
    let result = labels.map((label) => {
      let n = 0;
      let point = 0;
      this.state.allData.forEach((obj) => {
        if (obj.ability) {
          let answer = obj.ability.split(',');
          answer.forEach((cur, index) => {
            if (cur === label) {
              point += 5 - index;
              n += 1;
            }
          });
        }
      });
      return +(point / n).toFixed(3);
    });
    return result;
  }

  getYourAbility() {
    let labels = [
      '커뮤니케이션 능력',
      '학습 능력',
      '현재의 실력',
      '개발속도',
      '업무 관리 능력',
    ];
    let result = labels.map((label) => {
      let point = 0;
      this.state.ability.forEach((answer, index) => {
        if (answer === label) {
          point = 5 - index;
        }
      });
      return point;
    });
    return result;
  }

  stepFour() {
    var ctxFour = document
      .getElementById('stepFourRadarChart')
      .getContext('2d');
    new Chart(ctxFour, {
      type: 'radar',
      data: {
        datasets: [
          {
            label: '선택하신 답변',
            data: this.getYourAbility(),
            backgroundColor: 'rgba(255, 99, 132, 0.3)',
            borderColor: 'rgba(255, 99, 132, 0.3)',
          },
          {
            label: '평균답변',
            data: this.getAverage(),
            backgroundColor: 'rgba(46, 95, 242, 0.3)',
            borderColor: 'rgba(46, 95, 242, 0.3)',
          },
        ],
        labels: [
          '커뮤니케이션 능력',
          '학습 능력',
          '현재의 실력',
          '개발속도',
          '업무 관리 능력',
        ],
      },
      options: {
        responsive: false,
        scale: {
          ticks: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  stepFive() {
    let { id, company, developer } = this.state;

    fetch(url + 'company', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        company,
        developer,
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((data) => {
        if (typeof data === 'object') {
          this.handleSteps();
        }
      });
  }

  getCompany() {
    let result = [];
    this.state.allData.forEach((obj) => {
      if (obj.company) {
        let set = { x: obj.company, y: obj.developer };
        result.push(set);
      }
    });
    return result;
  }

  stepSix() {
    var ctxSix = document
      .getElementById('stepSixScatterChart')
      .getContext('2d');
    new Chart(ctxSix, {
      type: 'scatter',
      data: {
        datasets: [
          {
            label: '입력해주신 답변(총 인원, 개발자 인원)',
            data: [
              {
                x: this.state.company,
                y: this.state.developer,
              },
            ],
            pointRadius: 7,
            backgroundColor: 'rgba(148, 16, 76, 0.3)',
            borderColor: 'rgba(148, 16, 76, 0.3)',
          },
          {
            label: '다른 분들의 답변(총 인원, 개발자 인원)',
            data: this.getCompany(),
            pointRadius: 7,
            backgroundColor: 'rgba(46, 95, 242, 0.3)',
            borderColor: 'rgba(46, 95, 242, 0.3)',
          },
        ],
      },
      options: {
        responsive: false,

        scales: {
          xAxes: [
            {
              type: 'linear',
              position: 'bottom',
              ticks: {
                beginAtZero: true,
                stepSize: 1,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                stepSize: 1,
              },
            },
          ],
        },
      },
    });
  }

  stepSeven() {
    let { id, interest } = this.state;
    interest = interest === 'no' ? false : true;
    if (interest !== null) {
      fetch(url + 'interest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          interest,
        }),
      })
        .then((res) => {
          if (res.status === 200) {
            return res.json();
          }
        })
        .then((data) => {
          if (typeof data === 'object') {
            this.handleSteps();
          }
        });
    }
  }

  getInterest() {
    let result = {};
    let yes = 0;
    let no = 0;
    this.state.allData.forEach((obj) => {
      if (obj.interest === true) {
        yes += 1;
      } else if (obj.interest === false) {
        no += 1;
      }
    });
    if (this.state.interest === 'yes') {
      yes += 1;
    } else {
      no += 1;
    }
    result.yes = [yes, 0];
    result.no = [0, no];
    return result;
  }

  stepEight() {
    var ctxEight = document
      .getElementById('stepEightBarChart')
      .getContext('2d');
    new Chart(ctxEight, {
      type: 'horizontalBar',
      data: {
        datasets: [
          {
            label: ['네'],
            barThickness: 50,
            minBarLength: 0,
            data: this.getInterest()['yes'],
            backgroundColor: 'rgba(49, 133, 69, 0.3)',
            borderColor: 'rgba(49, 133, 69, 0.3)',
          },
          {
            label: ['아니요'],
            barThickness: 50,
            minBarLength: 0,
            data: this.getInterest()['no'],
            backgroundColor: 'rgba(148, 16, 76, 0.3)',
            borderColor: 'rgba(148, 16, 76, 0.3)',
          },
        ],
        labels: ['네', '아니요'],
      },
      options: {
        scales: {
          xAxes: [
            {
              ticks: {
                min: 0,
                stepSize: 1,
              },
            },
          ],
          yAxes: [
            {
              stacked: true,
            },
          ],
        },
        responsive: true,
      },
    });
  }

  render() {
    const { steps } = this.state;
    return (
      <div className='portfolioModal'>
        <div className='portfolioModal_overlay'>
          <div className='portfolioModal_content'>
            {steps === 0 ? (
              <>
                <canvas id='stepZeroLineChart' width='500' height='220' />
                <div>
                  <button className='basicBtn goBtn' onClick={this.handleSteps}>
                    Go!
                  </button>
                </div>
                <button
                  className='close'
                  onClick={() => this.props.handleModal(false)}
                >
                  1분이면 충분하지만 참여하지 않을래요!
                </button>
              </>
            ) : steps === 1 ? (
              <>
                <div className='question questionOne'>
                  (1/4) 어떤 직군에서 일하시고 있으신가요 ?
                </div>

                <input
                  type='radio'
                  id='programmer'
                  className='portfolioRadio'
                  name='job'
                  value='programmer'
                  onChange={(e) => this.setAnswer('job', e.target.value)}
                />
                <label htmlFor='programmer' className='radioBtn'>
                  소트프웨어 개발
                </label>

                <input
                  type='radio'
                  id='backoffice'
                  className='portfolioRadio'
                  name='job'
                  value='backoffice'
                  onChange={(e) => this.setAnswer('job', e.target.value)}
                />
                <label className='radioBtn' htmlFor='backoffice'>
                  경영지원
                </label>

                <input
                  type='radio'
                  id='pm'
                  className='portfolioRadio'
                  name='job'
                  value='pm'
                  onChange={(e) => this.setAnswer('job', e.target.value)}
                />
                <label className='radioBtn' htmlFor='pm'>
                  기획/운영
                </label>

                <input
                  type='radio'
                  id='etc'
                  className='portfolioRadio'
                  name='job'
                  value='etc'
                  onChange={(e) => this.setAnswer('job', e.target.value)}
                />
                <label className='radioBtn' htmlFor='etc'>
                  기타
                </label>

                <div>
                  <button className='basicBtn nextBtn' onClick={this.stepOne}>
                    NEXT
                    <span className='arrow'>>>></span>
                  </button>
                </div>
              </>
            ) : steps === 2 ? (
              <>
                <div className='canvas'>
                  <canvas id='stepTwoPieChart' />
                </div>
                <button className='basicBtn nextBtn' onClick={this.handleSteps}>
                  NEXT
                  <div className='arrow'>>>></div>
                </button>
              </>
            ) : steps === 3 ? (
              <>
                <div className='question'>
                  (2/4) 함께 일하고 싶은 주니어 개발자의 필수 역량을
                  <br />
                  중요하다고 생각하신 순서대로 선택해주세요!
                </div>
                <div className='textArr'>
                  선택한 답변 : {this.state.abilityText}
                </div>
                <input
                  type='checkbox'
                  className='portfolioCheckbox'
                  id='communication'
                  value='커뮤니케이션 능력'
                  onChange={(e) => this.setAnswerByOrder(e.target.value)}
                />
                <label htmlFor='communication' className='radioBtnForFive'>
                  커뮤니케이션 능력
                </label>

                <input
                  type='checkbox'
                  className='portfolioCheckbox'
                  id='learning'
                  value='학습 능력'
                  onChange={(e) => this.setAnswerByOrder(e.target.value)}
                />
                <label className='radioBtnForFive' htmlFor='learning'>
                  학습 능력
                </label>

                <input
                  type='checkbox'
                  className='portfolioCheckbox'
                  id='current'
                  value='현재의 실력'
                  onChange={(e) => this.setAnswerByOrder(e.target.value)}
                />
                <label className='radioBtnForFive' htmlFor='current'>
                  현재의 실력
                </label>

                <input
                  type='checkbox'
                  className='portfolioCheckbox'
                  id='speed'
                  value='개발속도'
                  onChange={(e) => this.setAnswerByOrder(e.target.value)}
                />
                <label className='radioBtnForFive' htmlFor='speed'>
                  개발속도
                </label>

                <input
                  type='checkbox'
                  className='portfolioCheckbox'
                  id='management'
                  value='업무 관리 능력'
                  onChange={(e) => this.setAnswerByOrder(e.target.value)}
                />
                <label className='radioBtnForFive' htmlFor='management'>
                  업무 관리 능력
                </label>

                <div>
                  <button
                    className='basicBtn nextBtnForFive'
                    onClick={this.stepThree}
                  >
                    NEXT
                    <div className='arrow'>>>></div>
                  </button>
                </div>
              </>
            ) : steps === 4 ? (
              <>
                <canvas id='stepFourRadarChart' width='450' height='300' />
                <button className='basicBtn nextBtn' onClick={this.handleSteps}>
                  NEXT
                  <div className='arrow'>>>></div>
                </button>
              </>
            ) : steps === 5 ? (
              <>
                <div className='question'>
                  (3/4) 다니시고 있으신 회사의 규모와 개발자의 수가 궁금해요,
                  알려주시겠어요?
                  <br />
                  (대략 적어주셔도 괜찮아요, 아무것도 적지 않은 채로 스킵도
                  가능합니다!)
                </div>
                <div className='numberTextOne'>
                  총 인원 :{' '}
                  <input
                    type='number'
                    className='count'
                    min='1'
                    max='1000'
                    onChange={(e) => this.setAnswer('company', e.target.value)}
                  />
                  명
                </div>
                <div className='numberTextTwo'>
                  총 개발자 :{' '}
                  <input
                    type='number'
                    className='count'
                    min='1'
                    max='1000'
                    onChange={(e) =>
                      this.setAnswer('developer', e.target.value)
                    }
                  />
                  명
                </div>
                <button className='basicBtn nextBtn' onClick={this.stepFive}>
                  NEXT
                  <div className='arrow'>>>></div>
                </button>
              </>
            ) : steps === 6 ? (
              <>
                <canvas id='stepSixScatterChart' width='450' height='300' />
                <button className='basicBtn nextBtn' onClick={this.handleSteps}>
                  NEXT
                  <div className='arrow'>>>></div>
                </button>
              </>
            ) : steps === 7 ? (
              <>
                <div className='question questionTwo'>
                  (4/4) 개발자 김경은에게 관심이 생기셨나요 ?
                </div>

                {/* <input
                  type='radio'
                  id='yes'
                  className='portfolioRadio radioYes'
                  name='interest'
                  value='yes'
                  onChange={(e) => this.setAnswer('interest', e.target.value)}
                />
                <label htmlFor='yes' className='radioBtn radioYes'>
                  네!
                </label> */}
                {/* <div>
                  <FormControlLabel
                    className='portfolioRadio radioYes'
                    control={
                      <Checkbox
                        // className='portfolioRadio radioYes'
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite />}
                        name='interest'
                        value='yes'
                        onChange={(e) =>
                          this.setAnswer('interest', e.target.value)
                        }
                      />
                    }
                    label='네'
                  />
                </div>

                <input
                  type='radio'
                  id='no'
                  className='portfolioRadio radioNo'
                  name='interest'
                  value='no'
                  onChange={(e) => this.setAnswer('interest', e.target.value)}
                />
                <label className='radioBtn radioNo' htmlFor='no'>
                  아니요..
                </label> */}

                <FormControl component='fieldset'>
                  <RadioGroup aria-label='gender' name='customized-radios'>
                    <FormControlLabel
                      className='portfolioRadio radioYes'
                      value='yes'
                      control={
                        <StyledRadio
                          icon={<FavoriteBorder />}
                          checkedIcon={<Favorite />}
                          onChange={(e) =>
                            this.setAnswer('interest', e.target.value)
                          }
                        />
                      }
                      label='네!'
                    />
                    <FormControlLabel
                      className='portfolioRadio radioNo'
                      value='no'
                      control={
                        <StyledRadio
                          onChange={(e) =>
                            this.setAnswer('interest', e.target.value)
                          }
                        />
                      }
                      label='아니오'
                    />
                  </RadioGroup>
                </FormControl>

                <button className='basicBtn nextBtn' onClick={this.stepSeven}>
                  NEXT
                  <div className='arrow'>>>></div>
                </button>
              </>
            ) : steps === 8 ? (
              <>
                <canvas id='stepEightBarChart' />
                <div className='check'>감사합니다</div>
                <button
                  className='close finalClose'
                  onClick={() => this.props.handleModal(false)}
                >
                  닫기
                </button>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioModal;
