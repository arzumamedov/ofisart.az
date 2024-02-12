import React, { useEffect, useState } from 'react'
import './MeetingTable.scss'
import { Link } from 'react-router-dom'

function MeetingTable() {

    const [detail, setDetail] = useState(null)

    useEffect(() => {
        fetch("http://localhost:3030/meetingtable")
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
                    <img src={x.image} alt="" />
                </Link>
            </div>
          ))
      }
    </div>

        </>
    )
}

export default MeetingTable