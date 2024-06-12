import React from 'react'
import bigPoster from '../../assets/fiction+manga/bigPoster.jpg'
import manga from '../../assets/fiction+manga/manga.jpg'
import '../Poster/poster.css'
function Poster() {
  return (
    <div className='posterContainer'>
        <div className="bigPoster">
            <img src={bigPoster} alt="" />
        </div>
    </div>
  )
}

export default Poster