
import React from 'react'
import './list.scss'

const List = () => {
  const showSidebar = ()=>{
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  const hideSidebar = ()=>{
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }
  return (
    <div className='listContainer'>
        <ul className='sidebar'>
            <li onClick={hideSidebar}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></li>
            <li><a href="/">Book</a></li>
            <li><a href="">New Arrival</a></li>
            <li><a href="">Box Sets</a></li>
            <li><a href="">Best Seller</a></li>
            <li><a href="">Fiction Book</a></li>
            <li><a href="">Award Winner</a></li>
            <li><a href="">Featured Authors</a></li>
            <li><a href="">Today's Deal</a></li>
            <li><a href="">Request a Book</a></li>
        </ul>
        <ul className='fullmenu'>
            <li className='hideOnMobile'><a href="/">Book</a></li>
            <li className='hideOnMobile' ><a href="">New Arrival</a></li>
            <li className='hideOnMobile'><a href="">Box Sets</a></li>
            <li className='hideOnMobile'><a href="">Best Seller</a></li>
            <li className='hideOnMobile'><a href="">Fiction Book</a></li>
            <li className='hideOnMobile'><a href="">Award Winner</a></li>
            <li className='hideOnMobile'><a href="">Featured Authors</a></li>
            <li className='hideOnMobile'><a href="">Today's Deal</a></li>
            <li className='hideOnMobile'><a href="">Request a Book</a></li>
            <li className='menuButton' onClick={showSidebar}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></li>
        </ul>
        <hr style={{"border-color":"black"}}/>
    </div>
  )
}

export default List