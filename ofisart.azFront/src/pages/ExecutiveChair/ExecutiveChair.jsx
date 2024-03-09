import React, { useEffect, useState } from 'react'
import './ExecutiveChair.scss'
import { Link } from 'react-router-dom'

function ExecutiveChair() {

    const [detail, setDetail] = useState(null)

    useEffect(() => {
        fetch("http://localhost:3030/api/product/65cf40c32072888a8aa42e54")
            .then((res) => res.json())
            .then((api) => setDetail(api))
    }, [])


    return (
        <>
    <div className='executiveChair'>
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

export default ExecutiveChair