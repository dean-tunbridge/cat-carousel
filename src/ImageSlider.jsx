import { useState } from 'react'
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react'
import './App.css'

function ImageSlider({ imageUrls }) {
  const [index, setIndex] = useState(0)

  function nextImage() {
    setIndex((index) => {
      if (index === index.length) {
        return imageUrls[0]
      } else return index + 1
    })
  }

  function prevImage() {
    setIndex((index) => {
      if (index === 0) {
        return imageUrls.length - 1
      } else return index - 1
    })
  }

  return (
    <div className="carousel">
      <img src={imageUrls[index]} className="img-slider" />
      <button className="slider-btn slider-btn-left" onClick={prevImage}>
        <ArrowBigLeft />
      </button>
      <button className="slider-btn slider-btn-right" onClick={nextImage}>
        <ArrowBigRight />
      </button>
    </div>
  )
}

export default ImageSlider
