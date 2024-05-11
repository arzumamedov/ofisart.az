import React, { useEffect, useRef, useState } from 'react';
import './Navbar.scss'
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { RxHamburgerMenu } from "react-icons/rx";
import IMAGE from "../../assets/Image/main.png"
const Navbar = () => {
	const { t, i18n } = useTranslation();
	const [burger, setBurger] = useState(false)
	// const [acc2, setAcc2] = useState(true)
	const [acc1, setAcc1] = useState(true)
	const [acc2, setAcc2] = useState(true)
	const [acc3, setAcc3] = useState(true)
	const [acc4, setAcc4] = useState(true)
	const [click, setClick] = useState(true)
	const [isRotated, setIsRotated] = useState({});
	useEffect(() => {
		if (burger) document.body.style.overflow = "hidden"
		else document.body.style.overflow = ""
	}, [burger])
	// const handleClick = () => {
	// 	setIsRotated(!isRotated);
	// };

	const handleClick = (id) => {
		setIsRotated(prevState => ({
			...prevState,
			[id]: !prevState[id]
		}));
	};

	const resetToken = () => {
		localStorage.removeItem('token');

	}




	const navbarDatas = [
		[
			{
				name: "manager",
				click: "menagerdesk"
			},
			{
				name: "workerdesk",
				click: "stafftable"
			},
			{
				name: "meetingtables",
				click: "meetingtable"
			},
			{
				name: "reception",
				click: "homeofficedesk"
			},
			{
				name: "magazinetable",
				click: "magazinetable"
			},
		],
		[
			{
				name: "managerchair",
				click: "executivechair"
			},
			{
				name: "workchairs",
				click: "staffchair"
			},
			{
				name: "sofas",
				click: "sofa"
			},
		],
		[
			{
				name: "shelves",
				click: "wardrobe"
			},
			{
				name: "filingcabinets",
				click: "filingcabinet"
			},
			{
				name: "tumba",
				click: "tumba"
			},
			{
				name: "dresser",
				click: "dresser"
			},
		],
		[
			{
				name: "clotheshangers",
				click: "hanger"
			},
			{
				name: "accessories",
				click: "accessory"
			},
			{
				name: "safe",
				click: "safe"
			},
		],
		[
			{
				name: "projectsf",
				click: "project"
			},
			{
				name: "about",
				click: "aboutus"
			},
		],
	]

	const onSelect = (event) => {
		console.log(event.target.getAttribute('lang-selection'));
	};
	return (
		<header className="header" id="header">
			<nav className="navbar container">
				<section className="navbar__left1">
					<Link to={"/"}> <img src={IMAGE} alt="" /></Link>
				</section>
				<section className="navbar__center">
					<div className="menu">
						<u className="menu__inner">
							<li className="menu__item menu__dropdown">
								<a href="" b className="menu__link">
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
											<Link to={'/safe'}><li>{t('safe')}</li></Link>

										</ul>
									</div>
								</div>
							</li>
							<li className="menu__item"><Link to={'/project'}><a href="#" className="menu__link">{t('projectsf')}</a></Link></li>
							<li className="menu__item menu__dropdown">
								<Link to={'/aboutus'}><li>{t('about')}</li></Link>
							</li>
							{/* <li className="menu__item menu__dropdown">
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
              </li> */}
						</u>
					</div>
				</section>
				<section className="resLang navbar__right">
					<button onClick={() => i18n.changeLanguage("az")}>az</button>
					<button onClick={() => i18n.changeLanguage("ru")}>ru</button>
					<button onClick={() => i18n.changeLanguage("en")}>en</button>
				</section>
				<div className='burgerMenu'>
					<RxHamburgerMenu className='burgerIcon' onClick={() => { setBurger(!burger) }} />
				</div>
				<div style={{
					left: burger ? 0 : "-100%"
				}} className={`burgerList`}>

					<div className='burgerLeft'>
						<div className='accordionMenu'>
							<div className=" accordionItems"  >
								<div onClick={() => { setAcc1(!acc1); handleClick('textIcon1'); }} className='textIcon'>
									<p>{t('tables')}</p>
									<i className={`fa-solid fa-angle-right ${isRotated['textIcon1'] ? 'rotate' : ''} `}></i>
								</div>
								<div className='accordionItem' style={{
									maxHeight: acc1 ? "0" : "200px",

								}} >
									<ul>
										{
											navbarDatas[0].map(item => (
												<li><Link to={item.click}>{t(item.name)}</Link></li>
											))
										}
									</ul>
								</div>
							</div>
							<div className=" accordionItems"  >
								{/* <p onClick={() => { setAcc2(!acc2) }}>{t('sofas/armchairs')}</p> */}
								<div onClick={() => { setAcc2(!acc2); handleClick('textIcon2'); }} className='textIcon'>
									<p>{t('sofas/armchairs')}</p>
									<i className={`fa-solid fa-angle-right ${isRotated['textIcon2'] ? 'rotate' : ''} `}></i>
								</div>
								<div className='accordionItem' style={{
									maxHeight: acc2 ? "0" : "200px",

								}} >
									<ul>
										{
											navbarDatas[1].map(item => (
												<li><Link to={item.click}> {t(item.name)}</Link></li>
											))
										}
									</ul>
								</div>
							</div>
							<div className=" accordionItems"  >
								<div onClick={() => { setAcc3(!acc3); handleClick('textIcon3'); }} className='textIcon'>
									<p>{t('closets')}</p>
									<i className={`fa-solid fa-angle-right ${isRotated['textIcon3'] ? 'rotate' : ''} `}></i>
								</div>
								<div className='accordionItem' style={{
									maxHeight: acc3 ? "0" : "200px",

								}} >
									<ul>
										{
											navbarDatas[2].map(item => (
												<li><Link to={item.click}> {t(item.name)}</Link></li>
											))
										}
									</ul>
								</div>
							</div>
							<div className=" accordionItems"  >
								<div onClick={() => { setAcc4(!acc4); handleClick('textIcon4'); }} className='textIcon'>
									<p>{t('other')}</p>
									<i className={`fa-solid fa-angle-right ${isRotated['textIcon4'] ? 'rotate' : ''} `}></i>
								</div>
								<div className='accordionItem' style={{
									maxHeight: acc4 ? "0" : "200px",

								}} >
									<ul>
										{
											navbarDatas[3].map(item => (
												<li><Link to={item.click}> {t(item.name)}</Link></li>
											))
										}
									</ul>
								</div>
							</div>

							<ul className='salam'>
								{
									navbarDatas[4].map(item => (
										<li><Link to={item.click}> {t(item.name)}</Link></li>
									))
								}
							</ul>

						</div>


						<section className="navbar__right"

						>
							<button onClick={() => i18n.changeLanguage("az")}>az</button>
							<button onClick={() => i18n.changeLanguage("ru")}>ru</button>
							<button onClick={() => i18n.changeLanguage("en")}>en</button>

							{/* <div
				 onClick={() => { setClick(!click) }}
			   >
				 <button
				   style={{ marginBottom: 10 }}
				   onClick={() => i18n.changeLanguage("az")}>Az</button> 
				   <span ><i className={`fa-solid fa-angle-up ${isRotated ? 'rotate' : ''} `}></i></span>
				 <div
				   className='langDiv'
				   style={{
					 display: click ? "none" : "flex"
				   }} >
				   <button onClick={() => i18n.changeLanguage("ru")}>ru</button>
				   <button onClick={() => i18n.changeLanguage("en")}>en</button>
				 </div>
			   </div> */}

						</section>
					</div>


				</div>
				{/* <div className="burgerRight"

					style={{
						opacity: burger ? 1 : 0,
						// display: !burger && "none"

					}}
					onClick={() => setBurger(!burger)}
				></div> */}
			</nav>
		</header>
	);
};

export default Navbar;
