import React, { useEffect, useState } from 'react'
import './MeetingTable.scss'
import { Link } from 'react-router-dom'

function MeetingTable() {
    useEffect(() => {
        window.scroll(0, 0)
      }, [])
    const [detail, setDetail] = useState(null)

    useEffect(() => {
        fetch("https://ofisart-az-api.vercel.app/api/product/65ce8a9d88d10110e61590a9")
            .then((res) => res.json())
            .then((api) => setDetail(api))
    }, [])


    return (
        <>
    <div className='meetingTable'>
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

export default MeetingTable