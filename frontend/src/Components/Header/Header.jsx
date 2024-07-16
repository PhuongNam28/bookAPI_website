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
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhz2j30y7x0CDtTfJYGsgeRM46qOU-3BCqfa291QRYEMqTQFt1ykPACmyo8pXiGi9lFyqV3U1re6TKQSfxpj-hb4eLE7mjnFdxY_Ap4ltHJLytFRqJEt7E7sAInrPpbfE3W1yB1W37-3vg1/w5120-h2160-c/zenitsu-agatsuma-kimetsu-no-yaiba-uhdpaper.com-4K-120.jpg" alt="" />
      </div>

      <div className='secondImg'>
          <ImageSlider imageUrls={posters}/>
      </div>
      <hr className='hrHeader' />
    </div>
  )
}

export default Header