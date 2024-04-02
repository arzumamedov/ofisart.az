import React, { useEffect, useState } from 'react'
import './ProjectPage.scss'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

function ProjectPage() {

    const [detail, setDetail] = useState(null)

    useEffect(() => {
        fetch("https://ofisart-api.vercel.app/api/project/")
            .then((res) => res.json())
            .then((api) => setDetail(api))
    }, [])


    return (
        <>
            <Helmet>
                <title>Project</title>
            </Helmet>
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