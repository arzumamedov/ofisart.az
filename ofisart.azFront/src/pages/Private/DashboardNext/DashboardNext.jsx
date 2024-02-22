import React, { useEffect, useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './DashboardNext.scss'
import { useNavigate } from 'react-router-dom';

const DashboardNext = () => {
    const navigate = useNavigate()
    const [data, setData] = useState([])
    const [input, setInput] = useState('')
    const [sortBy, setSortBy] = useState(null)

    useEffect(() => {
        getAll()
    }, [])


    function getAll() {
        fetch('http://localhost:3030/api/product')
            .then((res) => res.json())
            .then((api) => setData(api))
    }


    function handleAdd(value) {
        console.log("SUBMITTINGG");
        fetch("http://localhost:3030/api/product/", {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(value),
        })
            .then((res) => res.json())
            .then((api) => {
                getAll()
            })
    }


    async function handleDelete(id) {
        await fetch(`http://localhost:3030/api/product/${id}`, { method: "DELETE" })
            .then((res) => res.json())
            .then((api) => {
                getAll()
            })
    }

    function lower(data) {
        if (typeof data === 'string') {
            return data.toLowerCase()
        }
        return data
    }



    return (
        localStorage.getItem('token')?
        <div className='add'>

            <div className="nav"></div>

            <Formik
                initialValues={{ name: '', image: '', decsription: '', country: '', delivery: '', categoryId: '' }}
                validationSchema={Yup.object({
                    name: Yup.string().required('Required'),
                    image: Yup.string().required('Required'),
                    description: Yup.string().required('Required'),
                    country: Yup.string().required('Required'),
                    delivery: Yup.string().required('Required'),
                    categoryId: Yup.string().required('Required')

                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        handleAdd(values)
                        setSubmitting(false);
                    }, 400);
                }}
            >
                <Form>
                    <label htmlFor="name"> Name</label>
                    <Field name="name" type="text" />
                    <ErrorMessage name="name" />

                    <label htmlFor="image">Image</label>
                    <Field name="image" type="text" />
                    <ErrorMessage name="image" />

                    <label htmlFor="description">Description</label>
                    <Field name="description" type="text" />
                    <ErrorMessage name="description" />

                    <label htmlFor="country">Country</label>
                    <Field name="country" type="text" />
                    <ErrorMessage name="country" />

                    <label htmlFor="delivery">Delivery</label>
                    <Field name="delivery" type="text" />
                    <ErrorMessage name="delivery" />

                    {/* <label htmlFor="categoryId">CategoryId</label>
                    <Field name="categoryId" type="text" />
                    <ErrorMessage name="categoryId" /> */}
                    <select className='select' name="product" id="product">
                        <option className='option' value="65ce8a7588d10110e61590a5">Menecer Masaları</option>
                        <option value="65ce8a9588d10110e61590a7">İşçi masaları</option>
                        <option value="65ce8a9d88d10110e61590a9">İclas masaları</option>
                        <option value="65ce8ab188d10110e61590ab">Home Ofis masaları</option>
                        <option value="65cf40c32072888a8aa42e54">Menecer kresloları</option>
                        <option value="65cf40e22072888a8aa42e57">İşçi kresloları</option>
                        <option value="65cf40ed2072888a8aa42e59">Divanlar</option>
                        <option value="65cf41412072888a8aa42e5c">Rəfli dolablar</option>
                        <option value="65cf414e2072888a8aa42e5e">Sənəd Dolabları</option>
                        <option value="65cf415e2072888a8aa42e60">Tumbalar</option>
                        <option value="65cf41682072888a8aa42e62">Kamodlar</option>
                        <option value="65cf418e2072888a8aa42e64">Müştəri qəbul masası</option>
                        <option value="65cf41aa2072888a8aa42e66">Paltar asqılıqları</option>
                        <option value="65cf41db2072888a8aa42e68">Jurnal masaları</option>
                        <option value="65cf41eb2072888a8aa42e6a">Aksesuarlar</option>



                        {/* <option value="audi">Digər</option> */}
                    </select>

                    <button type="submit">Submit</button>
                </Form>
            </Formik>

            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder='Search Products...' />
            <div className="buttons">
                <button onClick={() => setSortBy({ preporty: 'name', asc: true })}>A-Z</button>
                <button onClick={() => setSortBy({ preporty: 'name', asc: false })}>Z-A</button>
                <button onClick={() => setSortBy(null)}>DEFAULT</button>
            </div>

            <table className='custom-table' border={1}>
                <tr>
                    <th className="custom-header">Image</th>
                    <th className="custom-header">Name</th>
                    <th className="custom-header">Description</th>
                    <th className="custom-header">Country</th>
                    <th className="custom-header">Delivery</th>
                    <th className="custom-header">Category</th>
                    <th className="custom-header">Delete</th>
                </tr>

                {data
                    .filter(item => item.name.toLowerCase().includes(input.toLowerCase()))
                    .sort((a, b) => {
                        if (!sortBy) {
                            return 0
                        } else if (sortBy.asc) {
                            return (lower(a[sortBy.preporty]) > lower(b[sortBy.preporty])) ? 1 : ((lower(b[sortBy.preporty]) > lower(a[sortBy.preporty])) ? -1 : 0)
                        } else if (sortBy.asc === false) {
                            return (lower(a[sortBy.preporty]) < lower(b[sortBy.preporty])) ? 1 : ((lower(b[sortBy.preporty]) < lower(a[sortBy.preporty])) ? -1 : 0)
                        }
                    })
                    .map(item => (
                        <tr>
                            <td><img width={500} src={item.image[0]} alt="" /></td>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>{item.country}</td>
                            <td>{item.delivery}</td>
                            <td>{item.category}</td>
                            <td><i className="fa-solid fa-trash-can" onClick={() => handleDelete(item._id)} ></i></td>
                        </tr>
                    ))}
            </table>



        </div>:navigate("/")
    )
}

export default DashboardNext