import { useState } from 'react'
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react'

function ImageSlider({ imageUrls }) {
  const [index, setIndex] = useState(0)

  return (
    <div>
      <img src={imageUrls[index]} />
      <button>
        <ArrowBigLeft />
      </button>
    </div>
  )
}

export default ImageSlider
