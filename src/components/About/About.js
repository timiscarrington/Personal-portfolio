import './About.scss'
import '../Layout/Layout.scss'
import React, {useState, useEffect} from 'react'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(()=> {
           return setLetterClass('text-animate-hover')
       }, 3000)
     }, [])

  return (
    <div className='container about-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters 
                letterClass={letterClass}
                strArray={['A','b','o','u','t', ' ', 'M','e']}
                idx={15}
                />
            </h1>
            <p>fill in later</p>
            <p>fill in later</p>
            <p>fill in later</p>
        </div>

        <div className='stage-cube-cont'>
            <div className='cubespinner'>
                <div className='face1'>
                    <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
                </div>
                <div className='face2'>
                    <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                </div>
                <div className='face3'>
                    <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
                </div>
                <div className='face4'>
                    <FontAwesomeIcon icon={faJsSquare} color="#Efd819" />
                </div>
                <div className='face5'>
                    <FontAwesomeIcon icon={faGitAlt} color="#EC4d28" />
                </div>
                <div className='face6'>
                    <FontAwesomeIcon icon={faPython} color="#ffde57" />
                </div>
            </div>
        </div>
    </div>


  )
}

export default About