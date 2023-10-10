import React from 'react'
import './portfolio.css'
import UI from '../../assets/ui.png'

const Portfolio = () => {
  return (
    <div className='portfolio' id='portfolio'>
      <div className="section1">
        <h2>What I Do</h2>
        <p>
          I am a full stack web developer with experience in Ruby on Rails, JavaScript and CSS3/HTML5.  My skills include:
        </p>
        <div className="skilltag">
          <img src={UI} alt="UI Design" className='taglogo' />
          <div className='taginfo'>
            <h3>UI/UX Designer</h3>
            <p>I am a well taught ui/ux designer!</p>
          </div>
        </div>
        <div className="skilltag">
          <img src={UI} alt="UI Design" className='taglogo' />
          <div className='taginfo'>
            <h3>UI/UX Designer</h3>
            <p>I am a well taught ui/ux designer!</p>
          </div>
        </div>
        <div className="skilltag">
          <img src={UI} alt="UI Design" className='taglogo' />
          <div className='taginfo'>
            <h3>UI/UX Designer</h3>
            <p>I am a well taught ui/ux designer!</p>
          </div>
        </div>
        <div className="skilltag">
          <img src={UI} alt="UI Design" className='taglogo' />
          <div className='taginfo'>
            <h3>UI/UX Designer</h3>
            <p>I am a well taught ui/ux designer! lorem10</p>
          </div>
        </div>
        <div className="skilltag">
          <img src={UI} alt="UI Design" className='taglogo' />
          <div className='taginfo'>
            <h3>UI/UX Designer</h3>
            <p>I am a well taught ui/ux designer!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
