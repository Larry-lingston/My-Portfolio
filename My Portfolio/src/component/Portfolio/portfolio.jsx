import React from 'react'
import './portfolio.css'
import UI from '../../assets/ui.png'
import Adobe from '../../assets/adobe.png'
import Appdev from '../../assets/app-design.png'
import Microsoft from '../../assets/microsoft.png'
import Archive1 from '../../assets/portfolio-1.png'
import Archive2 from '../../assets/portfolio-2.png'
import Archive3 from '../../assets/portfolio-3.png'
import Archive4 from '../../assets/portfolio-4.png'

const Portfolio = () => {
  return (
    <div className='portfolio' id='portfolio'>
      <div className="section1">
        <h2 className='centerheader'>What I Do</h2>
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
          <img src={Adobe} alt="UI Design" className='taglogo' />
          <div className='taginfo'>
            <h3>UI/UX Designer</h3>
            <p>I am a well taught ui/ux designer!</p>
          </div>
        </div>
        <div className="skilltag">
          <img src={Appdev} alt="UI Design" className='taglogo' />
          <div className='taginfo'>
            <h3>UI/UX Designer</h3>
            <p>I am a well taught ui/ux designer!</p>
          </div>
        </div>
        <div className="skilltag">
          <img src={Microsoft} alt="UI Design" className='taglogo' />
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
      <h2 className='centerheader'>My Resume</h2>
      <div className="section2">
        <>
        <p>
          Agbozo Theodore<br />
          P.O.Box 998<br />
          Ho, +223<br />
          theodoreagbozo87@gmail.com<br />
          0542916443<br /><br />
          Objective:
          Dedicated and highly skilled tech professional with a passion for solving complex problems and a proven track record of success in [mention specific area of expertise, e.g., software development, network administration, cybersecurity]. Seeking a challenging role in a dynamic organization to contribute my technical expertise and drive innovation.
          Education:<br />
          HND in Computer Science<br />
          Ho Technical University<br />
          Ho<br />
          2024<br /><br />
          Skills:<br />
          - Programming Languages: Java, Python, C++,CSharp<br />
          - Web Development:  HTML, CSS, JavaScript, React, Tailwind CSS<br />
          - Database Management:SQL<br />
          - Operating Systems: Windows, Linux<br />
          - Networking: TCP/IP, DNS, LAN/WAN<br />
          - Tools and Software: Git<br />
          Professional Experience:<br />
          Intern<br />
          Trebnet<br />
          Ho<br />
          1st October 2023-16th December 2023<br /><br />

          - Describe your key responsibilities, achievements, and projects related to this role.<br />
          - Use bullet points to make your accomplishments and skills clear and concise.<br />
          - Highlight any specific accomplishments, such as projects completed, systems optimized, or awards received.<br />

          [Job Title]<br />
          [Company Name]<br />
          [Location]<br />
          [Dates of Employment, e.g., Month Year - Month Year]<br />

          - Repeat the format for each relevant job experience.<br />

          Certifications:<br />
          - [List any relevant certifications, e.g., CompTIA Security+, AWS Certified Solutions Architect]<br />

          Professional Memberships:<br />
          - [List any relevant professional associations or memberships, e.g., IEEE, ACM]<br />

          Personal Projects (if applicable):<br />
          - [Describe any personal tech projects you've worked on, open-source contributions, or side projects.]<br />

          Languages:<br />
          - [List any foreign languages you are proficient in, if relevant.]<br />

          References:<br />
          Available upon request.
        </p>
        </>
      </div>
      <div className="section3">
        <h2 className='centerheader'>Achievements</h2>
        <div className="archivetagholder">
          <div className="archivetag">
              <img src={Archive1} alt="" className="tagimg"/>
            <p>
              <h3>Portfolio Page</h3>
              <span>Explore</span>{/* All spans are going to be changed to links*/}
            </p>
          </div>
          <div className="archivetag">
              <img src={Archive2} alt="" className="tagimg"/>
            <p>
            <h3>Portfolio Page</h3>
              <span>Explore</span>{/* All spans are going to be changed to links*/}
            </p>
          </div>
          <div className="archivetag">
              <img src={Archive3} alt="" className="tagimg"/>
            <p>
            <h3>Portfolio Page</h3>
              <span>Explore</span>{/* All spans are going to be changed to links*/}
            </p>
          </div>
          <div className="archivetag">
              <img src={Archive4} alt="" className="tagimg"/>
            <p>
            <h3>Portfolio Page</h3>
              <span>Explore</span>{/* All spans are going to be changed to links*/}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
