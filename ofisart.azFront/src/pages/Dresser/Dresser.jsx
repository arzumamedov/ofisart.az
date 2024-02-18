import React, { useEffect, useState } from 'react'
import './Dresser.scss'
import { Link } from 'react-router-dom'

function Dresser() {

    const [detail, setDetail] = useState(null)

    useEffect(() => {
        fetch("http://localhost:3030/api/product/65cf41682072888a8aa42e62")
            .then((res) => res.json())
            .then((api) => setDetail(api))
    }, [])


    return (
        <>
    <div className='dresser'>
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

export default Dresser