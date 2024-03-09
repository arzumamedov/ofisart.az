import React, { useState } from 'react';
import './Navbar.scss'
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [burger, setBurger] = useState(false)
  const resetToken = () => {
    localStorage.removeItem('token');

  }

  const onSelect = (event) => {
    console.log(event.target.getAttribute('lang-selection'));
  };
  return (
    <header className="header" id="header">
      <nav className="navbar container">
        <section className="navbar__left1">
          <NavLink to={'/'}><h1 className='navbar__a'>OfisArt</h1></NavLink>
        </section>
        <section className="navbar__center">
          <div className="menu">
            <u className="menu__inner">
              <li className="menu__item menu__dropdown">
                <a href="" className="menu__link">
                  {t('products')}
                  <i class="fa-solid fa-angle-up"></i>
                </a>
                <div className="submenu megamenu__text">
                  <div className="submenu__inner">
                    <h4 className="submenu__title">{t('table')}</h4>
                    <ul className="submenu__list">
                      <Link to={'/menagerdesk'}><li>{t('manager')}</li></Link>
                      <Link to={'/stafftable'}><li>{t('workerdesk')}</li></Link>
                      <Link to={'/meetingtable'}><li>{t('meetingtables')}</li></Link>
                      <Link to={'/homeofficedesk'}><li>{t('homeofficedesks')}</li></Link>
                      <Link to={'/magazinetable'}><li>{t('magazinetable')}</li></Link>

                    </ul>
                  </div>


                  <div className="submenu__inner">
                    <h4 className="submenu__title">{t('sofas/armchairs')}</h4>
                    <ul className="submenu__list">
                      <Link to={'/executivechair'}><li>{t('managerchair')}</li></Link>
                      <Link to={'/staffchair'}><li>{t('workchairs')}</li></Link>
                      <Link to={'/sofa'}><li>{t('sofas')}</li></Link>
                    </ul>
                  </div>




                  <div className="submenu__inner">
                    <h4 className="submenu__title">{t('closets')}</h4>
                    <ul className="submenu__list">
                      <Link to={'/wardrobe'}><li>{t('shelves')} </li></Link>
                      <Link to={'/filingcabinet'}><li>{t('filingcabinets')}</li></Link>
                      <Link to={'/tumba'}><li>{t('tumba')}</li></Link>
                      <Link to={'/dresser'}><li>{t('dresser')}</li></Link>

                    </ul>
                  </div>



                  <div className="submenu__inner">
                    <h4 className="submenu__title">{t('other')}</h4>
                    <ul className="submenu__list">
                      <Link to={'/hanger'}><li>{t('clotheshangers')}</li></Link>
                      <Link to={'/accessory'}><li>{t('accessories')}</li></Link>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="menu__item"><Link to={'/project'}><a href="#" className="menu__link">{t('projectsf')}</a></Link></li>
              <li className="menu__item menu__dropdown">
                <Link to={'/aboutus'}><li>{t('about')}</li></Link>
              </li>
              <li className="menu__item menu__dropdown">
                <a href="#" className="menu__link">
                  {t('account')}
                  <i class="fa-solid fa-angle-up"></i>
                </a>
                <div className="submenu megamenu__normal">
                  <ul className="submenu__list">
                    <Link to={'/login'}><li>{t('login')}</li></Link>
                    <Link><li onClick={resetToken}>{t('logout')}</li></Link>
                  </ul>    
                </div>
              </li>
            </u>
          </div>
        </section>
        <section className="navbar__right">
          <button onClick={() => i18n.changeLanguage("az")}>az</button>
          <button onClick={() => i18n.changeLanguage("ru")}>ru</button>
          <button onClick={() => i18n.changeLanguage("en")}>en</button>
        </section>
        <div className='burgerMenu'>
          <RxHamburgerMenu className='burgerIcon' onClick={() => { setBurger(!burger) }} />
        </div>
        <ul className={`burgerList ${burger ? 'burgerOpen' : 'burgerClose'}`}>
          <hr />
          <Link to={'/newproduct'}><li>{t('products')}</li></Link>
          <hr />
          <Link to={'/project'}><li>{t('projectsf')}</li></Link>
          <hr />
          <Link to={'/aboutus'}><li>{t('about')}</li></Link>
          <hr />
          <Link to={'/login'}><li>{t('account')}
          </li></Link>
          <hr />
          <section className="navbar__right">
            <button onClick={() => i18n.changeLanguage("az")}>az</button>
            <button onClick={() => i18n.changeLanguage("ru")}>ru</button>
            <button onClick={() => i18n.changeLanguage("en")}>en</button>
          </section>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
