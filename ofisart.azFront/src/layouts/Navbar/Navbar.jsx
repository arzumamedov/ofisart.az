import React from 'react';
import './Navbar.scss'
import { Link, NavLink } from 'react-router-dom';
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
          <NavLink to={'/'}><h1>OfisArt</h1></NavLink>
        </section>
        <section className="navbar__center">
          <div className="menu">
            {/* <div className="menu__header">
              <span className="menu__arrow"><i className="bx bx-chevron-left"></i></span>
              <span className="menu__title"></span>
            </div> */}
            <u className="menu__inner">
              <li className="menu__item menu__dropdown">
                <a href="#" className="menu__link">
                  Məhsullar
                  <i class="fa-solid fa-angle-up"></i>
                  {/* <i className="bx bx-chevron-right"></i> */}
                </a>
                <div className="submenu megamenu__text">
                  <div className="submenu__inner">
                    <h4 className="submenu__title">{t('table')}</h4>
                    <ul className="submenu__list">
                      <li><a href="#">{t('manager')}</a></li>
                      <li><a href="#">İşçi masaları</a></li>
                      <li><a href="#">İclas masaları</a></li>
                      <li><a href="#">Home ofis masaları</a></li>
                    </ul>
                  </div>


                  <div className="submenu__inner">
                    <h4 className="submenu__title">Divan/Kreslo</h4>
                    <ul className="submenu__list">
                      <li><a href="#">Menecer kresloları</a></li>
                      <li><a href="#">İşçi kresloları</a></li>
                      <li><a href="#">Divanlar</a></li>
                    </ul>
                  </div>




                  <div className="submenu__inner">
                    <h4 className="submenu__title">Dolab</h4>
                    <ul className="submenu__list">
                      <li><a href="#">Rəfli dolablar</a></li>
                      <li><a href="#">Sənəd dolabları</a></li>
                      <li><a href="#">Tumbalar</a></li>
                      <li><a href="#">Kamodlar</a></li>
                      <li><a href="#">Müştəri qəbul masası</a></li>

                    </ul>
                  </div>



                  <div className="submenu__inner">
                    <h4 className="submenu__title">Digər</h4>
                    <ul className="submenu__list">
                      <li><a href="#">Paltar asqılıqları</a></li>
                      <li><a href="#">Jurnal masaları</a></li>
                      <li><a href="#">Aksesuarlar</a></li>
                    </ul>
                  </div>

                  {/* Diğer alt menüler */}
                </div>
              </li>
              <li className="menu__item"><Link to={'/'}><a href="#" className="menu__link">Layihələr</a></Link></li>
              <li className="menu__item menu__dropdown">
                <a href="#" className="menu__link">
                  Haqqımızda
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
                  Əlaqə
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
              {/* <li className="menu__item"><a href="#" className="menu__link">Support</a></li> */}
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
