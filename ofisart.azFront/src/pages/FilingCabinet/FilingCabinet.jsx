import React, { useEffect, useState } from 'react'
import './FilingCabinet.scss'
import { Link } from 'react-router-dom'

function FilingCabinet() {
    useEffect(() => {
        window.scroll(0, 0)
      }, [])
    const [detail, setDetail] = useState(null)

    useEffect(() => {
        fetch("https://ofisart-az-api.vercel.app/api/product/65cf414e2072888a8aa42e5e")
            .then((res) => res.json())
            .then((api) => setDetail(api))
    }, [])


    return (
        <>
            <div className='filingCabinet'>
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

export default FilingCabinet