import { useState } from 'react'
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react'
import './App.css'

function ImageSlider({ imageUrls }) {
  const [index, setIndex] = useState(0)

  return (
    <div className="carousel">
      <img src={imageUrls[index]} className="img-slider" />
      <button className="slider-btn-left">
        <ArrowBigLeft />
      </button>
      <button className="slider-btn-right">
        <ArrowBigRight />
      </button>
    </div>
  )
}

export default ImageSlider
