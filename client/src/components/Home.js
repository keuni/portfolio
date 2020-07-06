import React from 'react';
import './style/Home.css';

function Home(props) {
  return (
    <div className='Home' id='HOME'>
      <div className='introduce'>
        안녕하세요. 생각하는 대로 만드는 프론트엔드 개발자가 되고 싶은{' '}
        <span className={props.ColorMode ? 'name nameColormode' : 'name'}>
          김경은
        </span>
        입니다.
      </div>
    </div>
  );
}

export default Home;
