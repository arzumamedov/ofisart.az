import React, { useEffect, useState } from 'react'
import './Sofa.scss'
import { Link } from 'react-router-dom'

function Sofa() {

    const [detail, setDetail] = useState(null)

    useEffect(() => {
        fetch("https://ofisart-api.vercel.app/api/product/65cf40ed2072888a8aa42e59")
            .then((res) => res.json())
            .then((api) => setDetail(api))
    }, [])


    return (
        <>
            <div className='sofa'>
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

export default Sofa