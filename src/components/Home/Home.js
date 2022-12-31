import React, { useState, useEffect } from 'react'
import LogoT from '../../assets/images/Letter.png'
import {Link} from 'react-router-dom'
import './Home.scss';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import Logo from './Logo/Logo';
import Loader from 'react-loaders';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray= ['i', 'm']
  const jobArray= ['s', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'e', 'n', 'g', 'i', 'n', 'e', 'e','r']

  useEffect(() => {
     setTimeout(()=> {
        return setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  
    return (
      <>
    <div className='container home-page'>
        <div className='text-zone'>
            <h1><span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
                <br /> 
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoT} alt="developer" />
            <AnimatedLetters letterClass={letterClass}
            strArray={nameArray}
            idx={15} />
            <br />
            <AnimatedLetters letterClass={letterClass}
            strArray={jobArray}
            idx={22} />
            </h1>
            <h2> Fullstack Develper</h2>
            <Link to="/contact" className='flat-button'>CONTACT ME</Link>
        </div>
        <Logo />
    </div>
    <Loader type='pacman'/>
    </>
  )
}

export default Home