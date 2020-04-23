import React from 'react';

function Home(props) {
  return (
    <div className="Home">
      <div>안녕하세요, 생각하는 대로 만드는 개발자가 되고 싶은 <span 
      className={props.ColorMode ? 'name nameColormode' : 'name'}>김경은</span>입니다.
      </div>
    </div>
  )
};

export default Home;