import React from 'react';
import BeHappyMain from './image/beHappy_main.png';

function BeHappy() {
  return (
    <div className='BeHappy'>
      <img src={BeHappyMain} alt={BeHappyMain} />
      <div className='BeHappydesc'>
        <div className='portfolioTitle'>
          BeHappy <span className='android'>(android)</span>{' '}
        </div>
        <div className='portfolioPosition'>[Front-end]</div>
        <div className='stack'>React, HTML, CSS </div>
        <div className='portfolioDesc'>
          - 심리상담소/정신과 안내 지도 서비스
        </div>
        <div>
          <a href='https://ttdoongdoong.tistory.com/15'>
            <button className='goBlog'>자세히 보러가기</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default BeHappy;
