import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Form, useNavigate, useParams } from "react-router-dom";
import "./UpdatePage.scss";
import { ErrorMessage, Field, Formik } from "formik";
import * as Yup from 'yup';


function UpdatePage() {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [country, setCountry] = useState("");
    const [delivery, setDelivery] = useState("");
    const [category, setCategory] = useState("");

    // function handleUpdate() {
    //     fetch("http://localhost:3030/api/product/id/" + id)
    // }


    const navigate = useNavigate();

    async function handleSubmit(e) {
        // e.preventDefault();
        console.log(category);
        navigate('/dashboardd')
        await fetch(`http://ofisart-az-api-git-master-arzus-projects.vercel.app/api/product/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                // "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({ "image": image[0], "name": name, "description": description, "country": country, "delivery": delivery, "category": delivery }),
        })
            .catch((error) => console.log(error.message))
            ;

    }

    async function getProductById(id) {
        const data = await fetch(`http://localhost:3030/api/product/id/${id}`);
        const res = await data.json();
        setName(res.name);
        setImage(res.image);
        setDescription(res.description);
        setCountry(res.country);
        setDelivery(res.delivery);
        setCategory(res.category);
        console.log(res);

    }

    useEffect(() => {
        getProductById(id);
    }, [id]);

    function handleChange(e, stateChanger) {
        stateChanger(e.target.value);
    }

    return (
        <form action="#" className="updateMain" onSubmit={() => { handleSubmit() }}>
            <div className="update">
                <h2>Image Url</h2>
                <input
                    type="text"
                    value={image}
                    onChange={(e) => handleChange(e, setImage)}
                    name=""
                    id=""
                    cols="25"
                    rows="6"
                ></input>
            </div>
            <div className="update">
                <h2>Name</h2>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => handleChange(e, setName)}
                    name=""
                    id=""
                ></input>
            </div>

            <div className="update">
                <h2>Description</h2>
                <textarea
                    className="about"
                    type="text"
                    value={description}
                    onChange={(e) => handleChange(e, setDescription)}
                    name=""
                    id=""
                    cols="35"
                    rows="9"
                ></textarea>
            </div>
            <div className="update">
                <h2>Country</h2>
                <input
                    type="text"
                    value={country}
                    onChange={(e) => handleChange(e, setCountry)}
                />
            </div>
            <div className="update">
                <h2>Delivery</h2>
                <input
                    type="text"
                    value={delivery}
                    onChange={(e) => handleChange(e, setDelivery)}
                />
            </div>
            <div className="update">
                <h2>Category</h2>
                <input
                    type="text"
                    value={category}
                    onChange={(e) => handleChange(e, setCategory)}
                />
            </div>
            <button><i class="fa-regular fa-circle-check"></i></button>
        </form>
    );
}

export default UpdatePage;