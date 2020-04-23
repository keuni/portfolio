import React from 'react';

const Modal = (props) => {
  console.log(props.handleModal);
  return (
    <div>
      <div className="myModal displayMyModal">
        <div className="modal_overlay" >
          <div className="modal_content">
            <span id="check">이메일을 확인해주세요 :)</span>
            <span id="x" onClick={props.handleModal}>X</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal;