import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './NewProduct.scss'
import { Helmet } from 'react-helmet'

function NewProduct() {

    const [detail, setDetail] = useState(null)

    useEffect(() => {
        fetch("http://ofisart-az-api-git-master-arzus-projects.vercel.app/api/product")
            .then((res) => res.json())
            .then((api) => {
                const sortedData = api.sort((a, b) => {
                    return new Date(b.createdAt) - new Date(a.createdAt);
                });
                setDetail(sortedData);
            });

    }, [])


    return (
        <>
            <Helmet>
                <title>New Product</title>
            </Helmet>
            <div className='newProduct'>
                {detail === null ?
                    <div className="spinner-container">
                        <i className="fa-solid fa-spinner fa-spin"></i>
                    </div>
                    : detail.map((x) => (
                        <div className='card'>
                            <div className='name'>{x.name}</div>
                            <Link to={'/detail/' + x._id}>
                                <img src={x.image[0]} alt="" />
                            </Link>
                        </div>
                    ))
                }
            </div>

        </>
    )
}

export default NewProduct