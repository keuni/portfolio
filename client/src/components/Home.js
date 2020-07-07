import React from 'react';
import './style/Home.css';
import github from './IMG/github.png';
import email from './IMG/email.png';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      copied: false,
    };
  }

  copyEmail() {
    let email = document.createElement('textarea');
    document.body.appendChild(email);
    email.value = 'kyungeun.kiim@gmail.com';
    email.select();
    document.execCommand('copy');
    document.body.removeChild(email);

    this.setState({
      copied: true,
    });

    setTimeout(() => {
      this.setState({
        copied: false,
      });
    }, 2000);
  }

  render() {
    return (
      <div className='Home' id='HOME'>
        <div>
          안녕하세요. 생각하는 대로 만드는 프론트엔드 개발자가 되고 싶은{' '}
          <span
            className={this.props.ColorMode ? 'name nameColormode' : 'name'}
          >
            김경은
            <span className='contact'>
              <div onClick={this.copyEmail.bind(this)}>
                <img src={email} alt={email} className='email' />
                kyungeun.kiim@gmail.com
                <div
                  className={this.state.copied ? 'showCopied copied' : 'copied'}
                >
                  copied
                </div>
              </div>
              <div>
                <img src={github} alt={github} className='github' />
                <a
                  href='https://github.com/keuni'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  https://github.com/keuni
                </a>
              </div>
            </span>
          </span>
          입니다.
        </div>
      </div>
    );
  }
}

export default Home;
