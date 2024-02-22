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
        <section className="navbar__left1">
          <NavLink to={'/'}><h1 className='navbar__a'>OfisArt</h1></NavLink>
        </section>
        <section className="navbar__center">
          <div className="menu">

            <u className="menu__inner">
              <li className="menu__item menu__dropdown">
                <a href="#" className="menu__link">
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
                    <h4 className="submenu__title">{t('sofa/armchair')}</h4>
                    <ul className="submenu__list">
                      <Link to={'/executivechair'}><li>{t('managerchair')}</li></Link>
                      <Link to={'/staffchair'}><li>{t('workchairs')}</li></Link>
                      <Link to={'/sofa'}><li>{t('sofas')}</li></Link>
                    </ul>
                  </div>




                  <div className="submenu__inner">
                    <h4 className="submenu__title">{t('closet')}</h4>
                    <ul className="submenu__list">
                      <Link to={'/wardrobe'}><li>{t('shelves')}</li></Link>
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

                  {/* Diğer alt menüler */}
                </div>
              </li>
              <li className="menu__item"><Link to={'/project'}><a href="#" className="menu__link">{t('projectsf')}</a></Link></li>
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
                    <Link to={'/login'}><li>Login</li></Link>
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
