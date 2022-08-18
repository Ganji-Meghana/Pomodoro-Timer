import React from 'react'
import './Footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {FaTwitterSquare} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
import {FcGoogle} from 'react-icons/fc'

function Footer() {
  return (
    <div>
        <footer className="bg-dark text-white text-center">
            <div className="wrapper mt-3 ">
            <nav className="footer-nav">
            <a href="#" className='pe-3 text-white text-decoration-none'>Terms of Use</a>
            <a href="#" className='text-white text-decoration-none '>Privacy</a>
            </nav>
            <nav className="footer-nav mt-2 mb-2">
            <a href="#" className='pe-3 text-primary text-opacity-100'><BsFacebook/></a>
            <a href="#" className='pe-3 '><FcGoogle/></a>
            <a href="#" className='pe-3 text-primary text-opacity-100' ><BsLinkedin/></a>
            <a href="#" className='pe-3 text-white'><BsGithub/></a>
            <a href="#" className='pe-3 text-primary text-opacity-100'><FaTwitterSquare/></a>
            
            </nav>
            <small>
            @2022 <strong>Pomodoro Timer</strong>, All Rights Reserved
            </small>
            
            </div>
        </footer>
    </div>
  )
}

export default Footer