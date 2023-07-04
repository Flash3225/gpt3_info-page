import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Let's Build Something amazing with GPT3 OpenAI </h1>
        <p>GPT3 stands for the 3rd generation of Generative Pre-trained Transformers. It is a neural network machine learning model trained using internet data to generate any type of text. It requires a small amount of input text to generate large volumes of relevant and sophisticated machine-generated text.</p>

        <div className='gpt3__header-content__input'>
         <input type='email' placeholder='Enter Your E-Mail'/>
         <button type='button'>Get Started</button>
        </div>

        <div className='gpt3__header-content__people'>
          <img src={people} alt='People'/>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>

      </div>
      <div className='gpt3__header-image'>
          <img src={ai} alt='AI' />
      </div>
    </div>
  )
}

export default Header
