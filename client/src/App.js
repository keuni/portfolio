import React from 'react';
import './style/App.css';
import Nav from './Nav';
import Message from './Message';
import Footer from './Footer';
import Modal from './components/Modal';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      ColorMode: false
    }
    this.handleMode = this.handleMode.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.handleColorMode = this.handleColorMode.bind(this);
  }
  handleMode(props) {
    this.setState({
      ColorMode: props
    })
  }
  handleModal() {
    document.querySelector('.myModal').classList.toggle('displayMyModal')
  }
  handleColorMode () {
    document.querySelector('.Menu').classList.toggle('MenuColormode');
    document.querySelector('.Appmain').classList.toggle('AppmainColormode');
    document.querySelector('.Message').classList.toggle('MessageColormode');
  }
  render() {
    return (
      <div className={this.state.ColorMode ? 'App Colormode' : 'App lightmode'} >
        <Modal handleMode={this.handleMode} handleModal={this.handleModal} handleColorMode={this.handleColorMode} />
        <div>
          <Nav handleModal={this.handleModal} />
        </div>
        <div>
          <Message />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
