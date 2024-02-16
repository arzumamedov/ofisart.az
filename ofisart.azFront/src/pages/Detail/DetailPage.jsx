import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './DetailPage.scss'
import Slider from '../../components/Slider/Slider'
function DetailPage() {
    const [detail, setDetail] = useState([])
    const { id } = useParams()

        useEffect(() => {
            fetch(`http://localhost:3030/api/product/id/${id}`)
                .then((res) => res.json())
                .then((api) => {
                    setDetail(api);
                })
        }, [id])
    // useEffect(() => {
    //     fetch("http://localhost:3030/project" + id)
    //         .then((res) => res.json())
    //         .then((api) => {
    //             setDetail(api);
    //         })
    // }, [id])


    // useEffect(() => {
    //     fetch("http://localhost:3030/newproduct" + id)
    //         .then((res) => res.json())
    //         .then((api) => {
    //             setDetail(api);
    //         })
    // }, [id])

    // useEffect(() => {
    //     fetch("http://localhost:3030/menagerdesk" + id)
    //         .then((res) => res.json())
    //         .then((api) => {
    //             setDetail(api);
    //         })
    // }, [id])

    // useEffect(() => {
    //     fetch("http://localhost:3030/stafftable" + id)
    //         .then((res) => res.json())
    //         .then((api) => {
    //             setDetail(api);
    //         })
    // }, [id])

    // useEffect(() => {
    //     fetch("http://localhost:3030/meetingtable" + id)
    //         .then((res) => res.json())
    //         .then((api) => {
    //             setDetail(api);
    //         })
    // }, [id])

    // useEffect(() => {
    //     fetch("http://localhost:3030/homedesk" + id)
    //         .then((res) => res.json())
    //         .then((api) => {
    //             setDetail(api);
    //         })
    // }, [id])

    // useEffect(() => {
    //     fetch("http://localhost:3030/executivechair" + id)
    //         .then((res) => res.json())
    //         .then((api) => {
    //             setDetail(api);
    //         })
    // }, [id])

    // useEffect(() => {
    //     fetch("http://localhost:3030/staffchair" + id)
    //         .then((res) => res.json())
    //         .then((api) => {
    //             setDetail(api);
    //         })
    // }, [id])

    // useEffect(() => {
    //     fetch("http://localhost:3030/sofa" + id)
    //         .then((res) => res.json())
    //         .then((api) => {
    //             setDetail(api);
    //         })
    // }, [id])



    // useEffect(() => {
    //     fetch("http://localhost:3030/wardrobe" + id)
    //         .then((res) => res.json())
    //         .then((api) => {
    //             setDetail(api);
    //         })
    // }, [id])


    // useEffect(() => {
    //     fetch("http://localhost:3030/filingcabinet" + id)
    //         .then((res) => res.json())
    //         .then((api) => {
    //             setDetail(api);
    //         })
    // }, [id])




    return (
        <>

            <div className='detail'>
                <div className='detailLeft'>
                    <Slider image={detail?.image}/>
                </div>
                <div className='detailRight'>
                    <div className='name'>{detail.name}</div>
                    <div className='country'>İstehsalçı ölkə:{detail.country}</div>
                    <div className='delivery'>Çatdırılma:{detail.delivery}</div>
                    <div>Model:{detail.name}</div>
                </div>
                {/* <h1>salam</h1> */}

            </div>
        </>
    )
}

export default DetailPage