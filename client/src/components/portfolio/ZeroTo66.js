import React from 'react';
import ZeroTo66Main from './image/zeroTo66_main.png';

function ZeroTo66() {
  return (
    <div className='ZeroTo66'>
      <img src={ZeroTo66Main} alt={ZeroTo66Main} />
      <div className='ZeroTo66desc'>
        <div className='portfolioTitle'>ZeroTo66</div>
        <div className='portfolioPosition'>[Front-end]</div>
        <div className='stack'> React-native, Redux, Expo </div>
        <div className='portfolioDesc'>- 습관 관리 웹 서비스</div>
        <div>
          <button className='goBlog'>자세히 보러가기</button>
        </div>
      </div>
    </div>
  );
}

export default ZeroTo66;
