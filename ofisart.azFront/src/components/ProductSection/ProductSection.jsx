import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './ProductSection.scss';

function ProductSection() {
    const { t, i18n } = useTranslation();

    return (
        <>
            <div className="productSection">
                <div className="productCard">
                    <Link to={'/bestseller'}>
                        <div className='image'>
                            <div className='shadow'>
                                <i class="fa-solid fa-eye"></i>
                            </div>
                            <img src="https://ciri.la-studioweb.com/wp-content/uploads/2022/09/m2-project-1.jpg" alt="" />
                        </div>
                        <h2>{t('title')}</h2>
                    </Link>
                </div>
                <div className="productCard">
                    <Link to={'/project'}>
                        <div className='image'>
                            <div className='shadow'>
                                <i class="fa-solid fa-eye"></i>
                            </div>
                            <img src="https://ciri.la-studioweb.com/wp-content/uploads/2022/09/m2-project-2.jpg" alt="" />
                        </div>
                        <h2>{t('projects')}</h2>
                    </Link>
                </div>
                <div className="productCard">
                    <Link to={'/newproduct'}>
                        <div className='image'>
                            <div className='shadow'>
                                <i class="fa-solid fa-eye"></i>
                            </div>
                            <img src="https://ciri.la-studioweb.com/wp-content/uploads/2022/09/m2-project-3.jpg" alt="" />
                        </div>
                        <h2>{t('newproduct')}</h2>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ProductSection