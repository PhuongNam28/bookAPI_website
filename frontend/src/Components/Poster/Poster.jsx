import React from 'react'
import fiction from '../../assets/fiction+manga/fictionposter.jpg'
import manga from '../../assets/fiction+manga/manga.jpg'
import './poster.css'
function Poster() {
  return (
    <div className='posterContainer'>
        <div className="fiction">
            <p>Fictions</p>
            <img src={fiction} alt="" />
        </div>
        <div className="manga">
            <p>Trending Manga</p>
            <img src={manga} alt="" />
        </div>
    </div>
  )
}

export default Poster