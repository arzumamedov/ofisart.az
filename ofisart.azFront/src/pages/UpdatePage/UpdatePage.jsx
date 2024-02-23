import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./UpdatePage.scss";

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
        await fetch(`http://localhost:3030/api/product/${id}`, {
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
        setCategory(res.category)
        console.log(res);

    }

    useEffect(() => {
        getProductById(id);
    }, [id]);

    function handleChange(e, stateChanger) {
        stateChanger(e.target.value);
    }

    return (
        <div>
            <div id="newsUpdate">
                <div className="container">
                    <h1>News Update</h1>
                    <form action="#" onSubmit={() => { handleSubmit() }}>
                        <div className="image_url change">
                            <h2>Image Url</h2>
                            <textarea
                                type="text"
                                value={image}
                                onChange={(e) => handleChange(e, setImage)}
                                name=""
                                id=""
                                cols="30"
                                rows="10"
                            ></textarea>
                        </div>
                        <div className="name change">
                            <h2>Name</h2>
                            <textarea
                                type="text"
                                value={name}
                                onChange={(e) => handleChange(e, setName)}
                                name=""
                                id=""
                                cols="20"
                                rows="7"
                            ></textarea>
                        </div>

                        <div className="about change">
                            <h2>Description</h2>
                            <textarea
                                className="about"
                                type="text"
                                value={description}
                                onChange={(e) => handleChange(e, setDescription)}
                                name=""
                                id=""
                                cols="30"
                                rows="10"
                            ></textarea>
                        </div>
                        <div className="category change">
                            <h2>Counrty</h2>
                            <input
                                type="text"
                                value={country}
                                onChange={(e) => handleChange(e, setCountry)}
                            />
                        </div>
                        <div className="category change">
                            <h2>Delivery</h2>
                            <input
                                type="text"
                                value={delivery}
                                onChange={(e) => handleChange(e, setDelivery)}
                            />
                        </div>
                        <div className="category change">
                            <h2>Category</h2>
                            <input
                                type="text"
                                value={category}
                                onChange={(e) => handleChange(e, setCategory)}
                            />
                        </div>
                        <button>update</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UpdatePage;