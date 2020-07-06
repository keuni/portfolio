import React from 'react';
import './../style/Portfolio.css';
import PortfolioModal from './PortfolioModal';
import BeHappy from './BeHappy';
import ZeroTo66 from './ZeroTo66';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openModal: false,
    };
    this.handleModal = this.handleModal.bind(this);
  }

  handleModal(status) {
    this.setState({
      openModal: status,
    });
  }

  render() {
    return (
      <div
        className={
          this.props.ColorMode ? 'portfolio portfolioColormode' : 'portfolio'
        }
        id='PORTFOLIO'
      >
        <div>
          <button className='click' onClick={() => this.handleModal(true)}>
            Click Here (Chart.js)
          </button>
        </div>
        {this.state.openModal ? (
          <PortfolioModal handleModal={this.handleModal} />
        ) : (
          ''
        )}

        <BeHappy />
        <ZeroTo66 />
      </div>
    );
  }
}

export default Portfolio;
