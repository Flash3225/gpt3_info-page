import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt='Possibility' />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request Early Access To Get Started</h4>
        <h1 className='gradient__text'>The possibilities are beyond your imaginations!</h1>
        <p>The possibilities that awaits one after gaining complete access over a pwerful AI tool are limitless. Even so, further developments are being made everyday adding to these possibilities exponentially.</p>
        <h4>Request Early Access To Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility
