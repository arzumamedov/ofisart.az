import React from 'react'
import './Navbar.scss'
function Navbar() {
  return (
    <>
      <nav>
        <img width={200} src="https://www.zivella.com/s/2636/i/Zivella_Logo.svg" alt="" />
          <div className='mehsullar'>
          <div className='dropDown'>
          <a href='#'>Mehsullarimiz</a>
          <ul className='dropDown-Menu'>
            <li>salamlar</li>
            <li>sagol</li>
            <li>akula</li>
          </ul>
          </div>
          <div>Blog</div>
          <div>Contact</div>
          <div>About</div>
          </div>

        <div className='navbarRight'>
          <button>AZ</button>
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </nav>
    </>
  )
}

export default Navbar