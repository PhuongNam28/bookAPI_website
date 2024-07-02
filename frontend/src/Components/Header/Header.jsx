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
          <img src="https://i.pinimg.com/originals/bb/eb/2e/bbeb2eb19cc25ae4a9fe214dc6044d39.png" alt="" />
      </div>

      <div className='secondImg'>
          <ImageSlider imageUrls={posters}/>
      </div>
      <hr className='hrHeader' />
    </div>
  )
}

export default Header