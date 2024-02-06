import React from 'react'
import './Footer.scss'
function Footer() {

  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    window.location.href = 'https://web.whatsapp.com/';
  };

  return (
    <>
      <footer>
        <div className='wp' onClick={handleWhatsAppClick}>
        </div>
        <div className='footerTop'>
          <div className='footerTopArt'>
            <h3>OFISART</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci cumque ipsa libero voluptate sed aperiam, illo laboriosam soluta odit accusantium.</p>
          </div>
          <div className='footerTopProduct'>
            <h4>Məhsullar</h4>
            <p>Masalar</p>
            <p>Divanlar/Kreslolar</p>
            <p>Dolablar</p>
            <p>Digər</p>
            <p></p>
          </div>
          <div className='footerTopContact'>
            <h4>Əlaqə</h4>
            <div className='phone'>
              <i class="fa-solid fa-phone"></i>
              <p>+994-51-573-73-13</p>
            </div>
            <div className='icons'>
              <div className='iconBg'>
                <a href="https://www.instagram.com/metaldan.az/"><i class="fa-brands fa-instagram"></i></a>
              </div>
              <div className='iconBg'>
                <a href="https://web.whatsapp.com/"><i class="fa-brands fa-whatsapp"></i></a>
              </div>
              <div className='iconBg'>
                <a href="https://twitter.com/?lang=en"><i class="fa-brands fa-twitter"></i></a>
              </div>
              <div className='iconBg'>
                <a href="https://www.facebook.com/"><i class="fa-brands fa-facebook-f"></i></a>
              </div>
            </div>
          </div>
          <div className='footerTopProject'>
            <h4>Layihələr</h4>
            <div className='images'>
              <img src="https://ciri.la-studioweb.com/wp-content/uploads/2022/08/ig4.jpg" alt="" />
              <img src="https://ciri.la-studioweb.com/wp-content/uploads/2022/08/ig1.jpg" alt="" />
              <img src="https://ciri.la-studioweb.com/wp-content/uploads/2022/08/m2-post-2.jpg" alt="" />
              <img src="https://ciri.la-studioweb.com/wp-content/uploads/2022/08/ig2.png" alt="" />
              <img src="https://ciri.la-studioweb.com/wp-content/uploads/2022/09/m2-bn-1.jpg" alt="" />
              <img src="https://ciri.la-studioweb.com/wp-content/uploads/2022/09/m2-project-1.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className='footerBottom'></div>
      </footer>
    </>
  )
}

export default Footer