import React, { useState, useEffect } from "react";
import "./Dashboard.scss";
import { Link, useNavigate, useNavigation } from "react-router-dom";

const Dashboard = () => {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  // const fetchAllProducts = async () => {
  //     try {
  //         const response = await fetch('http://localhost:3030/api/product');
  //         const data = await response.json();
  //         setAllProducts(data);
  //         console.log(data);
  //     } catch (error) {
  //         console.error('Error fetching products:', error);
  //     }
  // };
const [token, settoken] = useState(null)
  useEffect(() => {
    fetch("https://ofisart-api.vercel.app/api/product/")
      .then((res) => res.json())
      .then((api) => setAllProducts(api));
    // fetchAllProducts();
  }, []);
  useEffect(() => {
    settoken(localStorage.getItem('token'))
  }, [localStorage.getItem('token')])
  
  const navigate = useNavigate()
  return (
    token?
    <div className="mainDashboard">
      <Link to={"/dashboardd"}>
        <button>Add Product</button>
      </Link>
      <div className="dashboard">
        {allProducts &&
          allProducts.map((product) => (
            <div className="card" key={product._id}>
              <div className="img">
                <img src={product.image[0]} alt={product.name} />
              </div>
              <div className="name">{product.name}</div>
              <div className="delivery">Çatdırılma:{product.delivery}</div>
              <div className="country">İstehsalçı ölkə:{product.country}</div>   
              {/* <div className="description">{product.description}</div> */}
            </div>
          ))}
      </div>
    </div>:navigate('/')
  );
};

export default Dashboard;
