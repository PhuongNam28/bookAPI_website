import React from 'react'
import './header.css'
import poster1 from '../../assets/poster1.jpg'
import poster2 from '../../assets/poster2.jpg'
import poster3 from '../../assets/poster3.jpg'
import poster4 from '../../assets/poster4.jpg'
import poster5 from '../../assets/poster5.jpg'
import ImageSlider from '../ImageSlider/ImageSlider'
const Header = () => {
  const posters = [poster1,poster2,poster3,poster4,poster5]
  return (
    <div className='headerContainer'>
      <div className="firstImg">
          <img src="https://wallpapers.com/images/hd/one-punch-man-season-2-3142-x-1200-wallpaper-88zq29ixshe4j1cu.jpg" alt="" />
      </div>
      {/* 
       <div className="secondImg">
        <img src={poster1} alt="" />
       </div>
        <hr /> */}
      <div className='secondImg'>
          <ImageSlider imageUrls={posters}/>
      </div>
      <hr className='hrHeader' />
    </div>
  )
}

export default Header