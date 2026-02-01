import { useState } from 'react'
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react'
import './App.css'

function ImageSlider({ imageUrls }) {
  const [index, setIndex] = useState(0)

  return (
    <div className="carousel-img-slider">
      <img src={imageUrls[index]} className="img-slider" />
      <button>
        <ArrowBigLeft />
      </button>
      <button>
        <ArrowBigRight />
      </button>
    </div>
  )
}

export default ImageSlider
