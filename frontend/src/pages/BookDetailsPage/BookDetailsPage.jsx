import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import BookDetails from '../../Components/BookDetails/index'
import List from '../../Components/List/List'
import TrendingBook from '../../Components/TrendingBook/TrendingBook'

function BookDetailsPage() {
  return (
    <div>
        <Navbar />
        <List />
        <BookDetails/>
        <TrendingBook/>
        <Footer />
    </div>
  )
}

export default BookDetailsPage