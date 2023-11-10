import React from 'react'
import { useState } from 'react'
import './aboutme.css'

const AboutMe = () => {
    const [card,setcard]=useState([
        {title:'About Me' ,content:"Hello, world! I'm Theodore Agbozo, a passionate tech    enthusiast on a perpetual quest for innovation and     problem-solving. I thrive in the ever-evolving landscape of technology, where each line of code, every algorithm, and every digital project feels like an adventure waiting to unfold.",id:1},
        {title:'The Code Wizard' ,content:"My journey in the world of technology began at a young age when I first laid eyes on a computer screen. Since then, I've delved deep into the realms of programming, web development, and software engineering. Whether it's crafting elegant websites, building robust software solutions, or solving complex coding puzzles, I'm in my element.",id:2},
        {title:'Infinite Curiosity' ,content:"I'm driven by an insatiable curiosity about the digital universe. The rapidly evolving tech ecosystem never fails to inspire me to learn, adapt, and create. From mastering the latest programming languages to staying on the cutting edge of emerging technologies, my passion is a compass guiding me forward.",id:3},
        {title:'Problem Solver Extraordinaire' ,content:"I relish tackling challenges head-on and finding creative solutions to real-world problems. It's not just about writing lines of code; it's about using technology as a powerful tool to make people's lives easier and better. I believe that every challenge is an opportunity to innovate.",id:4},
        {title:'A Lifelong Learner' ,content:"The tech world is a learning journey, and I'm committed to keeping pace with its fast rhythm. I'm always eager to explore new domains, embrace industry best practices, and collaborate with like-minded tech enthusiasts. Learning, for me, is a never-ending adventure.",id:5},
        {title:'Beyond the Screen' ,content:"When I'm not immersed in lines of code, you can find me exploring the great outdoors, sipping on a cup of freshly brewed coffee, or lost in the pages of a thought-provoking book. Balance is essential, and I believe that diverse experiences fuel creativity.",id:6},
        {title:"Let's Connect" ,content:"I'm excited to connect with fellow tech enthusiasts, collaborators, and visionaries who share my passion for all things digital. If you have an exciting project, a tech challenge, or just want to chat about the latest advancements, don't hesitate to reach out. Let's make the digital world a better place together!",id:7}
    ]);
    
  return (
    <div className='aboutme' id='aboutme'> 
        <div className="cardholder">
        {card.map((variable)=>(
        <div className="itemcard" key={variable.id}>
          <h3 className='cardtitle'>{variable.title}</h3>
          <p className='cardcontent'>{variable.content}</p>
        </div>
        ))} 
        </div>
    </div>
  )
}

export default AboutMe
