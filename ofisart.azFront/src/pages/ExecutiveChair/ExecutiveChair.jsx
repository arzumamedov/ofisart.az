import React, { useEffect, useState } from 'react'
import './Executivechair.scss'
import { Link } from 'react-router-dom'

function ExecutiveChair() {

    const [detail, setDetail] = useState(null)

    useEffect(() => {
        fetch("http://localhost:3030/executivechair")
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
                    <img src={x.image} alt="" />
                </Link>
            </div>
          ))
      }
    </div>

        </>
    )
}

export default ExecutiveChair