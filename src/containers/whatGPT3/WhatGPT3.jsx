import React from 'react';
import { Feature } from '../../components';
import './whatGPT3.css';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title='What is GPT3' text=" It is an artificial intelligence chatbot developed by OpenAI. It is built on top of OpenAI's GPT-3 family of large language models and has been fine-tuned using both supervised and reinforcement learning techniques. "/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination!</h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title="Chatbots" text="A chatbot is a computer program that simulates and processes human conversation (either written or spoken), allowing humans to interact with digital devices as if they were communicating with a real person. " />
        <Feature title="Knowledgebase" text=" Knowledge base is a technology used to store complex structured and unstructured information used by a computer system. " />
        <Feature title="Education" text="It helps teachers to streamline their lessons and provide their students with a more engaging and rewarding educational experience." />
      </div>
    </div>
  )
}

export default WhatGPT3
