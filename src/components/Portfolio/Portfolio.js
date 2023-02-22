import './Portfolio.scss'
import React, { useEffect, useState } from 'react'
import { Loader } from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import portfolioData from '../../data/portfolio.json'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  console.log(portfolioData)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  })

  const renderPortfolio = (portfolioData) => {
    return (
      <div className="images-container">
        {portfolioData.map((project, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img
                src={project.cover}
                className="portfolio-image"
                alt="project"
              />
              <div className="content">
                <p className="title">{project.title}</p>
                <h4 className="description">{project.description}</h4>
                <div className="btn-container">
                  <button
                    className="btn"
                    onClick={() => window.open(project.URL)}
                  >
                    Live Site
                  </button>
                  <button
                    className="btn"
                    onClick={() => window.open(project.Github_Frontend)}
                  >
                    GitHub
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Portfolio'.split('')}
            idx={15}
          />
        </h1>
        <div>{renderPortfolio(portfolioData.projects)}</div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
