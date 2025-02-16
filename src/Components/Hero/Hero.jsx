import React from 'react'
import '../Hero/Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import AnchorLink  from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className="hero">
        <img className='profile-img' src={profile_img}></img>
        <h1><span>I'am Tiruvikraman,</span>AI developer based in India.</h1>
        <p>I'm AI/ML enthusiast, skilled in Generative AI, Large Language Models (LLMs), and Full Stack Development, with expertise in building scalable & AI-driven automation across various domains.</p>
        <div className="hero-action">
            <div className="hero-connect"><a href="https://www.linkedin.com/in/tiru-v/">Connect with me</a></div>
            <a className="hero-resume" href='https://drive.google.com/drive/folders/1uWEs6XTIRaPG-XFkE5NOie4a88YQp5lo?usp=sharing'>My Resume</a>
        </div>
    </div>
  )
}

export default Hero