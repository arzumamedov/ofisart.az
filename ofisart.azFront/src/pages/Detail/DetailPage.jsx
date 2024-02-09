import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './DetailPage.scss'
function DetailPage() {
    const [detail, setDetail] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetch("http://localhost:3030/bestseller" + id)
            .then((res) => res.json())
            .then((api) => {
                setDetail(api);
            })
    }, [id])
    useEffect(() => {
        fetch("http://localhost:3030/project" + id)
            .then((res) => res.json())
            .then((api) => {
                setDetail(api);
            })
    }, [id])


    useEffect(() => {
        fetch("http://localhost:3030/newproduct" + id)
            .then((res) => res.json())
            .then((api) => {
                setDetail(api);
            })
    }, [id])


    return (
        <>

            <div className='detailCard'>
                    <div className='name'>{detail.name}</div>
                    
                    <img src={detail.image} alt="" />
            </div>
        </>
    )
}

export default DetailPage