import React, { useEffect, useState } from 'react';
import './BestSeller.scss';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function BestSeller() {
    useEffect(()=>{
        window.scroll(0,0)
    },[])


    const [detail, setDetail] = useState(null);

    function bestSellerFind() {
        fetch("https://ofisart-az-api.vercel.app/api/product/")
            .then((res) => res.json())
            .then((api) => setDetail(api));
    }
//sadads
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
                        .filter((x) => x.delivery === "Mümkündür.")
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
