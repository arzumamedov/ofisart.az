import React from 'react';
import './Navbar.scss'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();


  const onSelect = (event) => {
    // Bu fonksiyonun içeriğini doldurun
    console.log(event.target.getAttribute('lang-selection'));
  };
  return (
    <header className="header" id="header">
      <nav className="navbar container">
        <section className="navbar__left">
          <h1>OfisArt</h1>
        </section>
        <section className="navbar__center">
          <div className="menu">
            {/* <div className="menu__header">
              <span className="menu__arrow"><i className="bx bx-chevron-left"></i></span>
              <span className="menu__title"></span>
            </div> */}
            <u className="menu__inner">
              <li className="menu__item"><Link to={'/'}><a href="#" className="menu__link">Home</a></Link></li>
              <li className="menu__item menu__dropdown">
                <a href="#" className="menu__link">
                  Products
                  <i class="fa-solid fa-angle-up"></i>
                  {/* <i className="bx bx-chevron-right"></i> */}
                </a>
                <div className="submenu megamenu__text">
                  <div className="submenu__inner">
                    <h4 className="submenu__title">Women</h4>
                    <ul className="submenu__list">
                      <li><a href="#">Shirts & Blouses</a></li>
                      <li><a href="#">Pants</a></li>
                      <li><a href="#">Blazers & Vests</a></li>
                      <li><a href="#">Cardigans & Sweaters</a></li>
                    </ul>
                  </div>


                  <div className="submenu__inner">
                    <h4 className="submenu__title">Women</h4>
                    <ul className="submenu__list">
                      <li><a href="#">Shirts & Blouses</a></li>
                      <li><a href="#">Pants</a></li>
                      <li><a href="#">Blazers & Vests</a></li>
                      <li><a href="#">Cardigans & Sweaters</a></li>
                    </ul>
                  </div>




                  <div className="submenu__inner">
                    <h4 className="submenu__title">Women</h4>
                    <ul className="submenu__list">
                      <li><a href="#">Shirts & Blouses</a></li>
                      <li><a href="#">Pants</a></li>
                      <li><a href="#">Blazers & Vests</a></li>
                      <li><a href="#">Cardigans & Sweaters</a></li>
                    </ul>
                  </div>



                  <div className="submenu__inner">
                    <h4 className="submenu__title">Women</h4>
                    <ul className="submenu__list">
                      <li><a href="#">Shirts & Blouses</a></li>
                      <li><a href="#">Pants</a></li>
                      <li><a href="#">Blazers & Vests</a></li>
                      <li><a href="#">Cardigans & Sweaters</a></li>
                    </ul>
                  </div>

                  {/* Diğer alt menüler */}
                </div>
              </li>
              <li className="menu__item menu__dropdown">
                <a href="#" className="menu__link">
                  More
                </a>
                {/* <div className="submenu megamenu__image">
                  <div className="submenu__inner">
                    <a href="#">
                      <img src="https://plus.unsplash.com/premium_photo-1677013011737-ba61149ba70c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="submenu-image" alt="" />
                      <span className="submenu__title">Home</span>
                    </a>
                  </div>
                </div> */}
              </li>
              <li className="menu__item menu__dropdown">
                <a href="#" className="menu__link">
                  Account
                  <i className="bx bx-chevron-right"></i>
                </a>
                <div className="submenu megamenu__normal">
                  <ul className="submenu__list">
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Register</a></li>
                    <li><a href="#">Track Order</a></li>
                    <li><a href="#">Help</a></li>
                  </ul>
                </div>
              </li>
              <li className="menu__item"><a href="#" className="menu__link">Support</a></li>
            </u>
          </div>
        </section>
        <section className="navbar__right">
          <button onClick={() => i18n.changeLanguage("az")}>az</button>
          <button onClick={() => i18n.changeLanguage("ru")}>ru</button>
          <button onClick={() => i18n.changeLanguage("en")}>en</button>
        </section>
      </nav>
    </header>
  );
};

export default Navbar;
