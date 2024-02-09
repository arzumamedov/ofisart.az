import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './ProductSection.scss';

function ProductSection() {
    const { t, i18n } = useTranslation();

    return (
        <>
            <div className="productSection">
                <Link to={'/bestseller'}>
                    <div className="productCard">
                        <div className='image'>
                            <div className='shadow'>
                                <i class="fa-solid fa-eye"></i>
                            </div>
                            <img src="https://ciri.la-studioweb.com/wp-content/uploads/2022/09/m2-project-1.jpg" alt="" />
                        </div>
                        <h2>{t('title')}</h2>
                    </div>
                </Link>
                <Link to={'/project'}>
                    <div className="productCard">
                        <div className='image'>
                            <div className='shadow'>
                                <i class="fa-solid fa-eye"></i>
                            </div>
                            <img src="https://ciri.la-studioweb.com/wp-content/uploads/2022/09/m2-project-2.jpg" alt="" />
                        </div>
                        <h2>{t('projects')}</h2>
                    </div>
                </Link>
                <Link to={'/newproduct'}>
                <div className="productCard">
                    <div className='image'>
                        <div className='shadow'>
                            <i class="fa-solid fa-eye"></i>
                        </div>
                        <img src="https://ciri.la-studioweb.com/wp-content/uploads/2022/09/m2-project-3.jpg" alt="" />
                    </div>
                    <h2>{t('newproduct')}</h2>
                </div>
                </Link>
            </div>
        </>
    )
}

export default ProductSection