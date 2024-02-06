import React from 'react'
import './ProductSection.scss'
import { Link } from 'react-router-dom'
function ProductSection() {
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
                    <h2>Ən çox satılan</h2>
                </div>
                </Link>
                <div className="productCard">
                    <div className='image'>
                        <div className='shadow'>
                            <i class="fa-solid fa-eye"></i>
                        </div>
                        <img src="https://ciri.la-studioweb.com/wp-content/uploads/2022/09/m2-project-2.jpg" alt="" />
                    </div>
                    <h2>Layihələrimiz</h2>
                </div>
                <div className="productCard">
                    <div className='image'>
                        <div className='shadow'>
                            <i class="fa-solid fa-eye"></i>
                        </div>
                        <img src="https://ciri.la-studioweb.com/wp-content/uploads/2022/09/m2-project-3.jpg" alt="" />
                    </div>
                    <h2>Yeni məhsullar</h2>
                </div>
            </div>
        </>
    )
}

export default ProductSection