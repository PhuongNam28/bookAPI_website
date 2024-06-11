import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import List from '../Components/List/List'
import Header from '../Components/Header/Header'
import Icon from '../Components/Icon/Icon'
import TrendingBook from '../Components/TrendingBook/TrendingBook'
import ComboBook from '../Components/ComboBook/ComboBook'
import BestSeller from '../Components/BestSeller/BestSeller'
function HomePage() {
  return (
    <div className='homePage'>  
        <Navbar/>
        <List/>
        <Header/>
        <Icon/>
        <TrendingBook/>
        <ComboBook/>
        <BestSeller/>
    </div>
  )
}

export default HomePage