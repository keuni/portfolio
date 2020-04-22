import React from 'react';

class Modal extends React.Component {
  handleChange(event) {
    let value = event.target.checked;
    this.props.handleMode(value);
    this.props.handleColorMode();
  }
  render() {
    return (
      <div>
        <div className="myModal displayMyModal">
          <div className="modal_overlay">
            <div className="modal_content">
              <div id="checkbox">
                  <input id="box" type="checkbox" onChange={this.handleChange.bind(this)}>
                  </input>
                  <span id="Colorodeon">Colorful Mode On</span>
              </div>
              <span id="x" onClick={this.props.handleModal}>X</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;