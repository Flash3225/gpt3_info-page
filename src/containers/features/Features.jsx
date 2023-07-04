import React from 'react';
import { Feature } from '../../components';
import './features.css';
const featuresData = [
  {
    title: 'Improving End Distrusts Instantly',
    text: 'Access to authentic information at fingertips eliminates any possibilities of distrust.',
  },
  {
    title: 'Become Active With AI Support',
    text: 'This AI tool helps in all kinds of works from text generation to code generation.',
  },
  {
    title: 'AI or Nothing',
    text: 'Only AI can make you surpass the competition.',
  },
  {
    title: 'No Limits is the New Reality',
    text: 'With a tool as powerful as GPT-3 in your hands, there is really no limits to what you can do!',
  }
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step Into Future Today & Make It Happen.</h1>
        <p>Request Early Access To Get Started</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features
