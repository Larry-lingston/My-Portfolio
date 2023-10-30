import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footerinfo">
          <span><FaGithub />Github</span>
          <span><FaYoutube />Youtube</span>
          <span><FaInstagram />Instagram</span>
          <span><FaTwitter />Twitter</span>
          <span><FaFacebook />Facebook</span>
        </div>
    </div>
  )
}

export default Footer
