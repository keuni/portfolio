import React from 'react';
import '../style/portfolioModal.css';
import Chart from 'chart.js';

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
      interestedIn: null,
    };
    this.handleSteps = this.handleSteps.bind(this);
    this.stepZero = this.stepZero.bind(this);
    this.setAnswer = this.setAnswer.bind(this);
    this.stepOne = this.stepOne.bind(this);
    this.getThisWeek = this.getThisWeek.bind(this);
    this.stepTwo = this.stepTwo.bind(this);
    this.setAnswerByOrder = this.setAnswerByOrder.bind(this);
    this.stepThree = this.stepThree.bind(this);
    this.stepFour = this.stepFour.bind(this);
    this.stepSix = this.stepSix.bind(this);
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
    this.stepZero();
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
    var ctx = document.getElementById('stepZeroLineChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.getThisWeek(),
        datasets: [
          {
            label: '참여자 수',
            backgroundColor: 'rgba(255, 95, 46, 0.3)',
            borderColor: 'rgba(255, 95, 46, 0.3)',
            data: [2, 6, 13, 20, 28],
          },
        ],
      },
      options: {},
    });
  }

  stepOne() {
    if (this.state.job) {
      fetch;
      this.handleSteps();
    }
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
    } else if (state === 'interestedIn') {
      this.setState({
        interestedIn: value,
      });
    }
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

  stepTwo() {
    var ctxTwo = document.getElementById('stepTwoPieChart').getContext('2d');
    new Chart(ctxTwo, {
      type: 'doughnut',
      data: {
        datasets: [
          {
            data: [17, 13, 2, 4],
            backgroundColor: ['pink', 'lightgreen', 'skyblue', 'gold'],
          },
        ],
        labels: ['소프트웨어 개발', '경영지원', '기획/운영', '기타'],
      },
      options: { responsive: false },
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
    if (this.state.ability && this.state.ability.length === 5) {
      this.handleSteps();
    }
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
            data: [5, 4, 1, 2, 3],
            backgroundColor: 'rgba(255, 99, 132, 0.3)',
            borderColor: 'rgba(255, 99, 132, 0.3)',
          },
          {
            label: '평균답변',
            data: [4.5, 3.5, 1.2, 2, 3],
            backgroundColor: 'rgba(46, 95, 242, 0.3)',
            borderColor: 'rgba(46, 95, 242, 0.3)',
          },
        ],
        labels: [
          '커뮤니케이션 능력',
          '학습능력',
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
                x: 20,
                y: 6,
              },
            ],
            pointRadius: 7,
            backgroundColor: 'rgba(148, 16, 76, 0.3)',
            borderColor: 'rgba(148, 16, 76, 0.3)',
          },
          {
            label: '다른 분들의 답변(총 인원, 개발자 인원)',
            data: [
              {
                x: 30,
                y: 12,
              },
              {
                x: 7,
                y: 2,
              },
              {
                x: 34,
                y: 50,
              },
            ],
            pointRadius: 7,
            backgroundColor: 'rgba(46, 95, 242, 0.3)',
            borderColor: 'rgba(46, 95, 242, 0.3)',
          },
        ],
      },
      options: {
        scales: {
          xAxes: [
            {
              type: 'linear',
              position: 'bottom',
            },
          ],
        },
      },
    });
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
            label: ['네', '아니요'],
            barThickness: 50,
            minBarLength: 0,
            data: [17, 2],
            backgroundColor: [
              'rgba(49, 133, 69, 0.3)',
              'rgba(148, 16, 76, 0.3)',
            ],
            borderColor: ['rgba(49, 133, 69, 0.3)', 'rgba(148, 16, 76, 0.3)'],
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
                <canvas id='stepZeroLineChart' />
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
                    Next
                  </button>
                </div>
              </>
            ) : steps === 2 ? (
              <>
                <canvas id='stepTwoPieChart' width='500' height='360' />
                <button className='basicBtn nextBtn' onClick={this.handleSteps}>
                  Next
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
                    Next
                  </button>
                </div>
              </>
            ) : steps === 4 ? (
              <>
                <canvas id='stepFourRadarChart' width='500' height='360' />
                <button className='basicBtn nextBtn' onClick={this.handleSteps}>
                  Next
                </button>
              </>
            ) : steps === 5 ? (
              <>
                <div className='question'>
                  (3/4) 다니시고 있으신 회사의 규모와 개발자의 수가 궁금해요,
                  <br />
                  알려주시겠어요?
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
                <button className='basicBtn nextBtn' onClick={this.handleSteps}>
                  Next
                </button>
              </>
            ) : steps === 6 ? (
              <>
                <canvas id='stepSixScatterChart' />
                <button className='basicBtn nextBtn' onClick={this.handleSteps}>
                  Next
                </button>
              </>
            ) : steps === 7 ? (
              <>
                <div className='question questionTwo'>
                  개발자 김경은에게 관심이 생기셨나요 ?
                </div>

                <input
                  type='radio'
                  id='yes'
                  className='portfolioRadio radioYes'
                  name='interestedIn'
                  value='yes'
                  onChange={(e) =>
                    this.setAnswer('interestedIn', e.target.value)
                  }
                />
                <label htmlFor='yes' className='radioBtn'>
                  네!
                </label>

                <input
                  type='radio'
                  id='no'
                  className='portfolioRadio'
                  name='interestedIn'
                  value='no'
                  onChange={(e) =>
                    this.setAnswer('interestedIn', e.target.value)
                  }
                />
                <label className='radioBtn' htmlFor='no'>
                  아니요..
                </label>

                <button className='basicBtn nextBtn' onClick={this.handleSteps}>
                  Next
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
