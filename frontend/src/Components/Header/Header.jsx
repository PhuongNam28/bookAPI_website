import React from 'react'
import header1 from '../../assets/Header/header2.1.jpg'
import header2 from '../../assets/Header/header2.2.jpg'
import header3 from '../../assets/Header/header2.3.jpg'
import header4 from '../../assets/Header/header2.4.jpg'
import header5 from '../../assets/Header/header2.5.jpg'
import header from "../../assets/Header/header1.png"
import ImageSlider from '../ImageSlider/index'
const Header = () => {
  const posters = [header1,header2,header3,header4,header5]
  return (
    <div className='headerContainer'>
      <div className="firstImg">
          <img src={header} alt="" />
      </div>
      <div className='secondImg'>
          <ImageSlider imageUrls={posters}/>
      </div>
      <hr className='hrHeader' />
    </div>
  )
}

export default Header