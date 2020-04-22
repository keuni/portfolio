import React from 'react';

class Message extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: null,
      email: null, 
      text: null
    } 
    this.sendMsg = this.sendMsg.bind(this)
  }
  sendMsg() {
    let Nname = document.querySelector('.writer').value;
    let Nemail = document.querySelector('.email').value;
    let Ntext = document.querySelector('.Text').value;
    if(Nemail.indexOf('@') === -1) {
      alert('이메일을 확인해주세요')
    } else {
      this.setState({
        name: Nname,
        email: Nemail,
        text: Ntext
      })
      document.querySelector('.writer').value = "";
      document.querySelector('.email').value = "";
      document.querySelector('.Text').value = "";
    }
  }
  componentDidUpdate() {
    fetch('http://localhost:3000/', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json",
      }
    }).then(res => {return res.json()})
    .then(res => {console.log(res)})
  }
  render() {
    return (
      <div className="Message">
        <div className="write">
          <div>메시지를 남겨주세요</div>
          <div className="box1">
            <input type="text" className="writer" placeholder="name"></input>
            <input type="text" className="email" placeholder="email"></input>
          </div>
            <input type="textarea" className="Text" placeholder="write a message"></input>
            <div><button id="submit" onClick={this.sendMsg}>submit</button></div>
        </div>
      </div> 
    )
  }
};

export default Message;