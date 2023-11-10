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
import Profile from '../../assets/profile.jpg'
import { useState } from 'react'
import {FaPhone,FaEnvelope,FaLocationDot,FaLinkedin,FaBasketball,FaGamepad} from 'react-icons/fa6'
import {SiSimkl} from 'react-icons/si'

const Portfolio = () => {
    const name ='Theodore Agbozo';
    const Phonenumber ='+233 54 291 6443';
    const email='theodorianagbozo@gmail.com';
    const location= 'Ghana, Accra, P.O.Box 998';
    const linkedin= 'https://linkedin/theodore-agbozo';
    const profilepic = <img src={Profile} alt="" srcset="" />;
    const englishprogressbar = {width: '90%'};
    const japanprogressbar = {width: '10%'};
    const eweprogressbar = {width: '50%'};
    const twiprogressbar = {width: '50%'};

    const htmlprogressbar = {width: '90%'};
    const cssprogressbar = {width: '80%'};
    const jsprogressbar = {width: '50%'};
    const reactprogressbar = {width: '70%'};
    const cplusprogressbar = {width: '60%'};
    const javaprogressbar = {width: '60%'};
    const pythonprogressbar = {width: '40%'};
    const djangoprogressbar = {width: '40%'};
    const figmaprogressbar = {width: '50%'};
    const videoprogressbar = {width: '60%'};
    const psprogressbar = {width: '50%'};
    
    const [whatido,setwhatido]=useState([
    {img:<img src={UI} alt="UI Design" className='taglogo' /> ,title:'UI Design',content:'I am a well taught ui/ux designer!',id:1},
    {img:<img src={Adobe} alt="Adobe Design" className='taglogo' /> ,title:'Adobe Design',content:'I edit for fun!',id:2},
    {img:<img src={Appdev} alt="App Developer" className='taglogo' /> ,title:'App Developer',content:'I am a well taught App Dev!',id:3},
    {img:<img src={Microsoft} alt="Microsoft Engineer" className='taglogo' /> ,title:'Microsoft Engineer',content:'I know a bit about Microsoft!',id:4},
    {img:<img src={UI} alt="Video Editor" className='taglogo' /> ,title:'Video Editor',content:'I am a video edditor!',id:5}
  ]);
  const [achievements,setachievements]=useState([
    {img: <img src={Archive1} alt="" className="tagimg"/>,linktext:'https://simple-ui-webpage-react.vercel.app/',link:<a href='https://simple-ui-webpage-react.vercel.app/'>Simple UI Page ViVo</a>,id:6},
    {img: <img src={Archive2} alt="" className="tagimg"/>,linktext:'https://beginner-s-luck-estate.vercel.app/',link:<a href='https://beginner-s-luck-estate.vercel.app/'>Estate Page</a>,id:7},
    {img: <img src={Archive3} alt="" className="tagimg"/>,linktext:'https://beginner-s-luck-estate.vercel.app/luxurious%20homes.html',link:<a href='https://beginner-s-luck-estate.vercel.app/luxurious%20homes.html'>Home4sale Page</a>,id:8},
    {img: <img src={Archive4} alt="" className="tagimg"/>,linktext:'https://personal-tasks.vercel.app/',link:<a href='https://personal-tasks.vercel.app/'>AlexaPage</a>,id:9},
  ]);
  const [edu, setedu]=useState([
    {year:'2021-2024', degree:'HND in ComputerScience', university:'HO Technical University', id:10},
  ]);
  return (
    <div className='portfolio' id='portfolio'>
      <div className="section1">
        <h2 className='centerheader'>What I Do</h2>
        <p>
          I am a full stack web developer with experience in Ruby on Rails, JavaScript and CSS3/HTML5.  My skills include:
        </p>
        {whatido.map((variable)=>(
        <div className="skilltag" key={variable.id}>
          {variable.img}
          <div className='taginfo'>
          <h3>{variable.title}</h3>
          <p>{variable.content}</p>
          </div>
        </div>
        ))}
      </div>
      <h2 className='centerheader'>My Resume</h2>
      <div className="section2">
        <div className="container">
          <div className="left_side">
            <div className="profileText">
              <div className="imgBx">
                {profilepic}
              </div>
              <h2>{name} <br />
              <span>Web Developer</span>
              </h2>
            </div>
            <div className="info">
              <div className="title">
                <h3>Contact Info</h3>
              </div>
                <ul>
                <li>
                  <span className='icon'>< FaPhone /></span>
                  <span className='text'>{Phonenumber}</span>
                </li>
                <li>
                  <span className='icon'><FaEnvelope/></span>
                  <span className='text'>{email}</span>
                </li>
                <li>
                  <span className='icon'><FaLocationDot/></span>
                  <span className='text'>{location}</span>
                </li>
                <li>
                  <span className='icon'><FaLinkedin/></span>
                  <span className='text'>{linkedin}</span>
                </li>
                </ul>
            </div>
            <div className="info">
              <div className="title">
                <h3>Eduacation</h3>
              </div>
                {edu.map((variable)=>(
                  <ul key={variable.id}>
                    <li>
                    <span>{variable.year}</span>
                    <p>{variable.degree}</p>
                    <p>{variable.university}</p>
                    </li>
                  </ul>
                ))}
            </div>
            <div className="info">
              <div className="title">
                <h3>Language</h3>
              </div>
              <ul>
                <li>
                  <span>English</span>
                  <span className='percent'>
                  <div style={englishprogressbar}></div>
                  </span>
                </li>
                <li>
                  <span>Japanesse</span>
                  <span className='percent'>
                  <div style={japanprogressbar}></div>
                  </span>
                </li>
                <li>
                  <span>Twi</span>
                  <span className='percent'>
                  <div style={twiprogressbar}></div>
                  </span>
                </li>
                <li>
                  <span>Ewe</span>
                  <span className='percent'>
                  <div style={eweprogressbar}></div>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="right_side">
              <h1>Profile</h1>
              <p>Dedicated and highly skilled tech professional with a passion for solving complex problems and a proven track record of success in Software development, Network Administration, Web Development, UI UX Designer, PhotoShop, Video Editing. Seeking a challenging role in a dynamic organization to contribute my technical expertise and drive innovation.</p>
              <h1>Experience</h1>
              <div className='exp'>
                <div className="left-side">
                  <p>2023-present</p>
                  <p>Trebnet</p>
                </div>
                <div className="right-side">
                  <h2>Web Dev</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse corrupti deleniti qui, repellat iure consectetur, dolores distinctio cupiditate quis deserunt eaque architecto inventore magni porro quia, in ut dolor maiores.
                  </p>
                </div>
              </div>
              <div className='exp'>
                <div className="left-side">
                  <p>2023-present</p>
                  <p>Trebnet</p>
                </div>
                <div className="right-side">
                  <h2>UI/UX</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse corrupti deleniti qui, repellat iure consectetur, dolores distinctio cupiditate quis deserunt eaque architecto inventore magni porro quia, in ut dolor maiores.
                  </p>
                </div>
              </div>
              <h1>Professional Skills</h1>
              <div className='skill'>
                <div className="left-side">
                  <p>HTML</p>
                </div>
                <div className="right-side">
                  <span className='percent'>
                  <div style={htmlprogressbar}></div>
                  </span>
                </div>
              </div>
              <div className='skill'>
                <div className="left-side">
                  <p>CSS</p>
                </div>
                <div className="right-side">
                  <span className='percent'>
                  <div style={cssprogressbar}></div>
                  </span>
                </div>
              </div>
              <div className='skill'>
                <div className="left-side">
                  <p>JavaScript</p>
                </div>
                <div className="right-side">
                  <span className='percent'>
                  <div style={jsprogressbar}></div>
                  </span>
                </div>
              </div>
              <div className='skill'>
                <div className="left-side">
                  <p>React</p>
                </div>
                <div className="right-side">
                  <span className='percent'>
                  <div style={reactprogressbar}></div>
                  </span>
                </div>
              </div>
              <div className='skill'>
                <div className="left-side">
                  <p>Java</p>
                </div>
                <div className="right-side">
                  <span className='percent'>
                  <div style={javaprogressbar}></div>
                  </span>
                </div>
              </div>
              <div className='skill'>
                <div className="left-side">
                  <p>C++</p>
                </div>
                <div className="right-side">
                  <span className='percent'>
                  <div style={cplusprogressbar}></div>
                  </span>
                </div>
              </div>
              <div className='skill'>
                <div className="left-side">
                  <p>Django</p>
                </div>
                <div className="right-side">
                  <span className='percent'>
                  <div style={djangoprogressbar}></div>
                  </span>
                </div>
              </div>
              <div className='skill'>
                <div className="left-side">
                  <p>Python</p>
                </div>
                <div className="right-side">
                  <span className='percent'>
                  <div style={pythonprogressbar}></div>
                  </span>
                </div>
              </div>
              <div className='skill'>
                <div className="left-side">
                  <p>UI/UX</p>
                </div>
                <div className="right-side">
                  <span className='percent'>
                  <div style={figmaprogressbar}></div>
                  </span>
                </div>
              </div>
              <div className='skill'>
                <div className="left-side">
                  <p>Photoshop</p>
                </div>
                <div className="right-side">
                  <span className='percent'>
                  <div style={psprogressbar}></div>
                  </span>
                </div>
              </div>
              <div className='skill'>
                <div className="left-side">
                  <p>Video Editing</p>
                </div>
                <div className="right-side">
                  <span className='percent'>
                  <div style={videoprogressbar}></div>
                  </span>
                </div>
              </div>
              <h1>Interest</h1>
              <div className="interest">
                <p><span><FaBasketball /></span>Basketball</p>
                <p><span><FaGamepad /></span>Gaming</p>
                <p><span><SiSimkl /></span>Movies and Anime</p>
              </div>
          </div>
        </div>
      </div>  
      <div className="section3">
        <h2 className='centerheader'>Achievements</h2>
        <div className="archivetagholder">
          {achievements.map((variable)=>(
        <div className="archivetag" key={variable.id}>
          {variable.img}
          <p>
            <h3>{variable.link}</h3>
          </p>
        </div>
        ))}

        </div>
      </div>
    </div>
  )
}

export default Portfolio
