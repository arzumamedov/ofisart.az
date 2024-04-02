import React, { useEffect, useState } from 'react'
import './Wardrobe.scss'
import { Link } from 'react-router-dom'

function Wardrobe() {

    const [detail, setDetail] = useState(null)

    useEffect(() => {
        fetch("http://ofisart-az-api-git-master-arzus-projects.vercel.app/api/product/65cf41412072888a8aa42e5c")
            .then((res) => res.json())
            .then((api) => setDetail(api))
    }, [])


    return (
        <>
    <div className='wardrobe'>
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

export default Wardrobe