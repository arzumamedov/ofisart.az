import React, { useEffect, useState } from 'react'
import './ProjectPage.scss'
import { Link } from 'react-router-dom'

function ProjectPage() {

    const [detail, setDetail] = useState(null)

    useEffect(() => {
        fetch("http://localhost:3030/project")
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

export default ProjectPage