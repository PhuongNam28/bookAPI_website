import React from 'react'
import poster1 from '../../assets/poster1.jpg'
import poster2 from '../../assets/poster2.jpg'
import poster3 from '../../assets/poster3.jpg'
import poster4 from '../../assets/poster4.jpg'
import poster5 from '../../assets/poster5.jpg'
import ImageSlider from '../ImageSlider/index'
const Header = () => {
  const posters = [poster1,poster2,poster3,poster4,poster5]
  return (
    <div className='headerContainer'>
      <div className="firstImg">
          <img src="https://i.pinimg.com/736x/87/91/d3/8791d39fc9053bad34ec25858391e881.jpg" alt="" />
      </div>

      <div className='secondImg'>
          <ImageSlider imageUrls={posters}/>
      </div>
      <hr className='hrHeader' />
    </div>
  )
}

export default Header