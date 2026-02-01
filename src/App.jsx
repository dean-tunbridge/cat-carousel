import ImageSlider from './ImageSlider'
import './App.css'

import cat1 from './images/cat1.jpg'
import cat2 from './images/cat2.jpg'
import cat3 from './images/cat3.jpg'
import cat4 from './images/cat4.jpg'
import cat5 from './images/cat5.jpg'

const images = [cat1, cat2, cat3, cat4, cat5]

function App() {
  return (
    <>
      <div className="carousel-container">
        <ImageSlider imageUrls={images} />
      </div>
    </>
  )
}

export default App
