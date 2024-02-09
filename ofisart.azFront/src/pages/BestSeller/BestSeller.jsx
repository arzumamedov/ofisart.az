import React, { useEffect, useState } from 'react'
import './BestSeller.scss'
import { Link } from 'react-router-dom'

function BestSeller() {

    const [detail, setDetail] = useState([])

    useEffect(() => {
        fetch("http://localhost:3030/bestseller")
            .then((res) => res.json())
            .then((api) => setDetail(api))
    }, [])


    return (
        <>
            <div className='bestSeller'>
                {detail.map((x) => (

                    <div className='card'>
                        <div className='name'>{x.name}</div>
                        <Link to={'/detail/' + x._id}>

                            <img src={x.image} alt="" />
                        </Link>
                    </div>

                ))}
            </div>

        </>
    )
}

export default BestSeller