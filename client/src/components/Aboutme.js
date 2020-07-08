import React from 'react';
import './style/Aboutme.css';

export default class Aboutme extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      onClickedEvent: '2010',
    };
  }
  eventClicked(e) {
    let key = e.target.id;
    if (key) {
      this.setState({
        onClickedEvent: key,
      });
    }
  }
  render() {
    return (
      <div className='aboutme' id='ABOUTME'>
        <div className='flex-parent'>
          <div
            className='input-flex-container'
            onClick={this.eventClicked.bind(this)}
          >
            <div className='timeline-descriptions-wrapper'>
              <div className='descriptionBox'>
                <p
                  id='2010'
                  className={
                    this.state.onClickedEvent === '2010'
                      ? 'eventOnClick'
                      : 'none'
                  }
                >
                  연세대학교에서 경영학 전공
                </p>
                <p
                  id='2015'
                  className={
                    this.state.onClickedEvent === '2015'
                      ? 'eventOnClick'
                      : 'none'
                  }
                >
                  삼성물산 패션부문 인력개발팀에서 교육담당자로 근무
                </p>
                <p
                  id='2018'
                  className={
                    this.state.onClickedEvent === '2018'
                      ? 'eventOnClick'
                      : 'none'
                  }
                >
                  삼성물산 패션부문 재무팀 근무
                </p>
                <p
                  id='2019'
                  className={
                    this.state.onClickedEvent === '2019'
                      ? 'eventOnClick'
                      : 'none'
                  }
                >
                  런던에서 10개월간 생활
                  <br /> 국민은행 런던지점 백오피스에서 근무
                </p>
                <p
                  id='2020'
                  className={
                    this.state.onClickedEvent === '2020'
                      ? 'eventOnClick'
                      : 'none'
                  }
                >
                  코드스테이츠 Immersive 코스 수료
                  <br /> 프로젝트 2회 진행
                </p>
                <p
                  id='2020~'
                  className={
                    this.state.onClickedEvent === '2020~'
                      ? 'eventOnClick'
                      : 'none'
                  }
                >
                  프론트엔드 개발자
                </p>
              </div>
            </div>
            <span className='dotGroup'>
              <input
                type='radio'
                name='timeline-dot'
                id='2010'
                className={
                  this.state.onClickedEvent === '2010'
                    ? 'dot dotClicked'
                    : 'dot'
                }
              />
              <div className='dot-info'>
                <span className='year'>2010</span>
                <span className='label'>경영학과</span>
              </div>
            </span>
            <span className='dotGroup'>
              <input
                type='radio'
                name='timeline-dot'
                id='2015'
                className={
                  this.state.onClickedEvent === '2015'
                    ? 'dot dotClicked'
                    : 'dot'
                }
              />
              <div className='dot-info' id='2015'>
                <span className='year'>2015</span>
                <span className='label'>HRD</span>
              </div>
            </span>
            <span className='dotGroup'>
              <input
                type='radio'
                name='timeline-dot'
                id='2018'
                className={
                  this.state.onClickedEvent === '2018'
                    ? 'dot dotClicked'
                    : 'dot'
                }
              />
              <div className='dot-info' id='2018'>
                <span className='year'>2018</span>
                <span className='label'>재무팀</span>
              </div>
            </span>
            <span className='dotGroup'>
              <input
                type='radio'
                name='timeline-dot'
                id='2019'
                className={
                  this.state.onClickedEvent === '2019'
                    ? 'dot dotClicked'
                    : 'dot'
                }
              />
              <div className='dot-info' id='2019'>
                <span className='year'>2019</span>
                <span className='label'>런던생활</span>
              </div>
            </span>
            <span className='dotGroup'>
              <input
                type='radio'
                name='timeline-dot'
                id='2020'
                className={
                  this.state.onClickedEvent === '2020'
                    ? 'dot dotClicked'
                    : 'dot'
                }
              />
              <div className='dot-info' id='2020'>
                <span className='year'>2020</span>
                <span className='label'>부트캠프</span>
              </div>
            </span>
            <span className='dotGroup'>
              <input
                type='radio'
                name='timeline-dot'
                id='2020~'
                className={
                  this.state.onClickedEvent === '2020~'
                    ? 'dot dotClicked'
                    : 'dot'
                }
              />
              <div className='dot-info' id='2020~'>
                <span className='year'>2020~</span>
                <span className='label continued'>to be continued</span>
              </div>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
