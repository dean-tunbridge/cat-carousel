import { useState } from 'react'
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react'
import './App.css'

function ImageSlider({ imageUrls }) {
  const [index, setIndex] = useState(0)

  function prevImage() {
    setIndex((index) => {
      if (index === 0) {
        return imageUrls.length - 1
      } else return index - 1
    })
  }

  function nextImage() {
    setIndex((index) => {
      if (index === imageUrls.length - 1) {
        return 0
      } else return index + 1
    })
  }

  return (
    <div className="carousel">
      <div className="carousel-img-map">
        {imageUrls.map((url) => (
          <img
            key={url}
            src={url}
            className="img-slider-img"
            style={{ translate: `${-100 * index}%` }}
          />
        ))}
      </div>
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
