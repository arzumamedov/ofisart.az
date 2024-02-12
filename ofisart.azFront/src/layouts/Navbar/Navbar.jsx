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
                  {t('products')}
                  <i class="fa-solid fa-angle-up"></i>
                  {/* <i className="bx bx-chevron-right"></i> */}
                </a>
                <div className="submenu megamenu__text">
                  <div className="submenu__inner">
                    <h4 className="submenu__title">{t('table')}</h4>
                    <ul className="submenu__list">
                      <Link to={'/menagerdesk'}><li>{t('manager')}</li></Link>
                      <Link to={'/stafftable'}><li>İşçi masaları</li></Link>
                      <Link to={'/meetingtable'}><li>İclas masaları</li></Link>
                      <Link to={'/homedesk'}><li>Home ofis masaları</li></Link>
                    </ul>
                  </div>


                  <div className="submenu__inner">
                    <h4 className="submenu__title">Divan/Kreslo</h4>
                    <ul className="submenu__list">
                      <Link to={'/executivechair'}><li>Menecer kresloları</li></Link>
                      <Link to={'/staffchair'}><li>İşçi kresloları</li></Link>
                      <Link to={'/sofa'}><li>Divanlar</li></Link>
                    </ul>
                  </div>




                  <div className="submenu__inner">
                    <h4 className="submenu__title">Dolab</h4>
                    <ul className="submenu__list">
                      <Link><li>Rəfli dolablar</li></Link>
                      <Link><li>Sənəd dolabları</li></Link>
                      <Link><li>Tumbalar</li></Link>
                      <Link><li>Kamodlar</li></Link>
                      <Link><li>Müştəri qəbul masası</li></Link>

                    </ul>
                  </div>



                  <div className="submenu__inner">
                    <h4 className="submenu__title">Digər</h4>
                    <ul className="submenu__list">
                      <Link><li>Paltar asqılıqları</li></Link>
                      <Link><li>Jurnal masaları</li></Link>
                      <Link><li>Aksesuarlar</li></Link>
                    </ul>
                  </div>

                  {/* Diğer alt menüler */}
                </div>
              </li>
              <li className="menu__item"><Link to={'/'}><a href="#" className="menu__link">{t('projectsf')}</a></Link></li>
              <li className="menu__item menu__dropdown">
                <a href="#" className="menu__link">
                  {t('about')}
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
                  {t('contact')}
                  <i className="bx bx-chevron-right"></i>
                </a>
                <div className="submenu megamenu__normal">
                  <ul className="submenu__list">
                    <Link><li>Login</li></Link>
                    <Link><li>Register</li></Link>
                    <Link><li>Track Order</li></Link>
                    <Link><li>Help</li></Link>
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
