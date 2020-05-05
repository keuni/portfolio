import React from 'react';
import '../style/Portfolio.css';
import express from './IMG/express.png'
import js from './IMG/js.png'
import mysql from './IMG/mysql.jpg'
import react from './IMG/react.png'
import redux from './IMG/redux.png'

function Portfolio(props) {
    return(
      <div className={props.ColorMode ? 'portfolio portfolioColormode' : 'portfolio'}>
        <div className={props.ColorMode ? 'skillBox skillBoxColormode' : 'skillBox'}>
          <div className="skills">/SKILLS</div>
          <img src={js} />
          <img src={react} />
          <img src={redux} />
          <img src={express} />
          <img src={mysql} />
        </div>
        <div className="maintext">Portfolio Coming Soon !</div>
      </div>
    )
  }
  
  export default Portfolio;