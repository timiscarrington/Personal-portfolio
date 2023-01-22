import './About.scss'
import '../Layout/Layout.scss'
import React, {useState, useEffect} from 'react'
import Loader from 'react-loaders'
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
    <>
    <div className='container about-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters 
                letterClass={letterClass}
                strArray={['A','b','o','u','t', ' ', 'M','e']}
                idx={15}
                />
            </h1>
            <p> As a full-stack developer, I am passionate about creating innovative and user-friendly solutions to complex problems. My background in project management and hands-on experience in the construction and development industry has honed my problem-solving, project management, and attention to detail skills</p>
            <p> I have a solid foundation in computer science and software development and am proficient in technologies such as HTML/CSS, Javascript, Python, React, Node.js, Django, NoSql and SQL. I am always eager to learn new technologies and programming languages. My ultimate goal is to develop software that is efficient, reliable and easy to use for the end-user.</p>
            <p>In my free time, I enjoy staying current on the latest industry trends and developments, as well as pursuing my hobbies such as fitness, the outdoors, sports, hiking and camping trips, and home improvement and woodworking projects. With my diverse background, I am confident that I can bring a unique and valuable perspective to any full-stack development project.</p>
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
    <Loader type="pacman" />
    </>
  )
}

export default About