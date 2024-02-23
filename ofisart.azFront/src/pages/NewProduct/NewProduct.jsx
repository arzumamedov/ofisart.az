import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './NewProduct.scss'

function NewProduct() {

    const [detail, setDetail] = useState(null)

    useEffect(() => {
        fetch("http://localhost:3030/api/newproduct")
            .then((res) => res.json())
            .then((api) => setDetail(api))
    }, [])


    return (
        <>
            <div className='newProduct'>
                {detail === null ?
                    <div className="spinner-container">
                        <i className="fa-solid fa-spinner fa-spin"></i>
                    </div>
                    : detail.map((x) => (
                        <div className='card'>
                            <div className='name'>{x.name}</div>
                            <Link to={'/detail/' + x._id}>
                                <img src={x.image} alt="" />
                            </Link>
                        </div>
                    ))
                }
            </div>

        </>
    )
}

export default NewProduct