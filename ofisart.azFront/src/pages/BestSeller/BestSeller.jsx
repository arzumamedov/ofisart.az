import React, { useEffect, useState } from 'react';
import './BestSeller.scss';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function BestSeller() {
    const [detail, setDetail] = useState(null);

    function bestSellerFind() {
        fetch("http://ofisart-az-api-git-master-arzus-projects.vercel.app/api/product/")
            .then((res) => res.json())
            .then((api) => setDetail(api));
    }

    useEffect(() => {
        bestSellerFind();
    }, []);

    return (
        <>
            <Helmet>
                <title>Best Seller</title>
            </Helmet>
            <div className='bestSeller'>
                {detail === null ? (
                    <div className="spinner-container">
                        <i className="fa-solid fa-spinner fa-spin"></i>
                    </div>
                ) : (
                    detail
                        .filter((x) => x.delivery === "Mümkündür.") // Filtreleme ekledim
                        .map((x) => (
                            <div className='card' key={x._id}>
                                <div className='name'>{x.name}</div>
                                <Link to={'/detail/' + x._id}>
                                    <img src={x.image[0]} alt="" />
                                </Link>
                            </div>
                        ))
                )}
            </div>
        </>
    );
}

export default BestSeller;
