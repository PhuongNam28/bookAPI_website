import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import List from '../../Components/List/List'
import Header from '../../Components/Header/Header'
import Icon from '../../Components/Icon/Icon'
import TrendingBook from '../../Components/TrendingBook/TrendingBook'
import ComboBook from '../../Components/ComboBook/ComboBook'
import BestSeller from '../../Components/BestSeller/BestSeller'
import InternationalBestSeller from '../../Components/InternationalBestSeller/InternationalbestSeller'
import NewArrival from '../../Components/NewArrival/NewArrival'
import Poster from '../../Components/Poster/Poster'
import Poster2 from '../../Components/Poster2/Poster2'
import AwardWinner from '../../Components/AwardWinner/AwardWinner'
import Footer from '../../Components/Footer/Footer'
import LoginPage from '../LoginPage/LoginPage'
import { auth } from '../../lib/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useUserStore } from '../../lib/userStore'

function HomePage() {
  return (
    <div className='homePage'>
     
        <Navbar />
        <List />
        <Header />
        <Icon />
        <TrendingBook />
        <ComboBook />
        <BestSeller />
        <NewArrival />
        <Poster />
        <InternationalBestSeller />
        <Poster2 />
        <AwardWinner />
        <Footer />
    </div>
  )
}

export default HomePage
