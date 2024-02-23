import React, { useEffect, useState } from 'react'
import './ProjectPage.scss'
import { Link } from 'react-router-dom'

function ProjectPage() {
    
    const [detail, setDetail] = useState(null)

    useEffect(() => {
        fetch("http://localhost:3030/api/project/")
            .then((res) => res.json())
            .then((api) => setDetail(api))
    }, [])


    return (
        <>
            <div className='project'>
                {detail === null ?
                    <div className="spinner-container">
                        <i className="fa-solid fa-spinner fa-spin"></i>
                    </div>
                    : detail.map((x) => (
                        <div className='card'>
                            <div className='name'>{x.name}</div>
                            {/* <div className='location'>{x.location}</div> */}
                            <Link to={'/project/detail/' + x._id}>
                                <img src={x.image[0]} alt="" />
                            </Link>
                        </div>
                    ))
                }
            </div>

        </>
    )
}

export default ProjectPage