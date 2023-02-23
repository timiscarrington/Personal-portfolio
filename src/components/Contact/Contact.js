import './Contact.scss'
import { MapContainer, TileLayer, Marker, ZoomControl } from 'react-leaflet'
import { useNavigate } from 'react-router-dom'
import React, { useState, useEffect, useRef } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()
  const apiKey = process.env.REACT_APP_EMAIL_API
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_we8rb5d', 'template_l3lnxma', refForm.current, apiKey)
      .then(
        () => {
          alert('Message sucessfully sent!')
          navigate('/');
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interest in all Frontend, Fullstack, and Freelance
            opportunities that are remote or Seattle, WA based. However, if you
            have any other requests or questions, don't hesitate to contact me
            using the form below.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="subect"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <div className="info-map">
        Tim Carrington
        <br />
        Seattle,WA
        <br />
        United States
        <br />
        <span>timiscarrington@gmail.com</span>
      </div>
      <div className="map-wrap">
        <MapContainer
          center={[47.6542, -122.35]}
          zoom={12}
          scrollWheelZoom={false}
          zoomControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[47.6542, -122.35]} />
        </MapContainer>
      </div>
    </>
  )
}

export default Contact
