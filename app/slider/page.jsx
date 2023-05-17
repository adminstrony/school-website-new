'use client'

import { useState } from 'react'
import './slider.scss'

const slides = [
  <div key={1} className="slide">
    Slide 1
  </div>,
  <div key={2} className="slide">
    Slide 2
  </div>,
  <div key={3} className="slide">
    Slide 3
  </div>,
  <div key={4} className="slide">
    Slide 4
  </div>,
  <div key={5} className="slide">
    Slide 5
  </div>,
  <div key={6} className="slide">
    Slide 6
  </div>,
  // Dodaj więcej slajdów według potrzeb
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handlePreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1))
  }

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
  }

  return (
    <div className="slider-container">
      <button onClick={handlePreviousSlide}>Poprzedni</button>
      {slides[currentSlide - 1]}
      {slides[currentSlide]}
      {slides[currentSlide + 1]}
      <button onClick={handleNextSlide}>Następny</button>
    </div>
  )
}
