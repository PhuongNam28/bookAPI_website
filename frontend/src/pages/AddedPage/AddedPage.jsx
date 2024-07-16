import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import List from '../../Components/List/List'
import Footer from '../../Components/Footer/Footer'
import AddedItems from '../../Components/AddedItems/index'

function AddedPage() {
  return (
    <div>
        <Navbar/>
        <List/>
        <AddedItems/>
        <Footer/>   
    </div>
  )
}

export default AddedPage