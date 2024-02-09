import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './NewProduct.scss'

function NewProduct() {

    const [detail, setDetail] = useState([])

    useEffect(() => {
        fetch("http://localhost:3030/newproduct")
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

export default NewProduct