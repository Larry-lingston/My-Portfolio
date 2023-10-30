import React from 'react'
import OpenGmailButton from '../mailto';
import './contact.css'

const Contact = () => {
  return (
    <div id='contact'>
        <div className="contacttag">
           <div className="tag1">
                <h1>Let's work together on your next Project!</h1>
                <p>
                    To contact me, click on the contact button to get acces to
                     my gmail and then send me a request for collaboration 
                     to work on your next Project
                </p>
           </div>
           <div className="tag2">
                <OpenGmailButton />
           </div>
        </div>
    </div>
  )
}

export default Contact
