import './Portfolio.scss'
import React, { useEffect, useState } from 'react'
import { Loader } from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'

const Portfolio= () => {
const[letterClass, setLetterClass] = useState('text-animate')

  return (
    <>
    <div className='container portfolio-page'>
        <h1 className='page-title'>
            <AnimatedLetters
            letterClass={letterClass}
            strArray={'Portfolio'.split("")}
                idx={15}
            />
        </h1>
        <div>{renderData}</div>
    </div>
    <Loader type='pacman'/>
    </>
  )
}

export default Portfolio;
