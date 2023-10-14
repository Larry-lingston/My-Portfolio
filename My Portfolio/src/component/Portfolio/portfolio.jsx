import React from 'react'
import './portfolio.css'
import UI from '../../assets/ui.png'

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
      <h2 className='centerheader'>My Resume</h2>
      <div className="section2">
        <>
        <p>
          Agbozo Theodore <br />
          [Your Address]<br />
          [City, State ZIP Code]<br />
          [Your Email Address]<br />
          [Your Phone Number]<br />
          [LinkedIn Profile URL (if applicable)]<br />
          Objective:
          Dedicated and highly skilled tech professional with a passion for solving complex problems and a proven track record of success in [mention specific area of expertise, e.g., software development, network administration, cybersecurity]. Seeking a challenging role in a dynamic organization to contribute my technical expertise and drive innovation.
          Education:<br />
          [Degree Earned, e.g., Bachelor of Science in Computer Science]<br />
          [University Name]<br />
          [Location]<br />
          [Year of Graduation, e.g., 20XX]<br />
          Skills:<br />
          - Programming Languages: [List relevant languages, e.g., Java, Python, C++]<br />
          - Web Development: [List relevant technologies, e.g., HTML, CSS, JavaScript]<br />
          - Database Management: [List relevant databases, e.g., SQL, MongoDB]<br />
          - Operating Systems: [List relevant systems, e.g., Windows, Linux]<br />
          - Networking: [List relevant skills, e.g., TCP/IP, DNS, LAN/WAN]<br />
          - Security: [List relevant skills, e.g., firewall management, threat detection]<br />
          - Tools and Software: [List relevant tools and software, e.g., Git, JIRA]<br />
          - Problem Solving: [Mention your problem-solving skills and any specific methodologies you use]<br />
          Professional Experience:<br />
          [Job Title]<br />
          [Company Name]<br />
          [Location]<br />
          [Dates of Employment, e.g., Month Year - Month Year]<br />

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
            <div className="tagimg">
              <img src="" alt="" />
            </div>
            <p>
              <h3>[Tag Name]</h3>
              <span>read more</span>
            </p>
          </div>
          <div className="archivetag">
            <div className="tagimg">
              <img src="" alt="" />
            </div>
            <p>
              <h3>[Tag Name]</h3>
              <span>read more</span>
            </p>
          </div>
          <div className="archivetag">
            <div className="tagimg">
              <img src="" alt="" />
            </div>
            <p>
              <h3>[Tag Name]</h3>
              <span>read more</span>
            </p>
          </div>
          <div className="archivetag">
            <div className="tagimg">
              <img src="" alt="" />
            </div>
            <p>
              <h3>[Tag Name]</h3>
              <span>read more</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
