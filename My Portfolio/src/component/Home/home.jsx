import React from 'react'
import './home.css'
import { Link, Element, scroller, scrollSpy } from 'react-scroll'
import image from '../../assets/profile.jpg'

const Home = () => {
  return (
    <div className='content' id='home'>
      <main className="content">
            <div className="profilepic">
                <img src={image} alt="Profile" />
            </div>
            <article>
                <p> I am <span>THEODORE AGBOZO</span>.</p><p> A webpage developer. I wouldn't say I'm an expert now for I made this page at the year 13th of November 2022. Currently a beginner but would surpass my current self in 2 years to come.</p>
                <p>For those itching to know about me, I'm just a teenager who loves tech. I'm currently offering Computer Science at HO TECHNICAL UNIVERSITY. As at now I made this page during my level 100 in HO TECH INSTITUTION.</p>
                <p>For more about me click on the link below</p>
                <p className='homelink'><Link className='homelinkitem' to='aboutme' smooth='true' offset={-10} spy='true' duration={1000}>About Me</Link></p>
            </article>
      </main>
    </div>
  )
}

export default Home
