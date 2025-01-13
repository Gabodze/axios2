import React, { useEffect, useState } from "react";
import axios from "axios";

function Main() {
    const [products, setProducts] = useState([]); 

    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products")
            .then((response) => {
                setProducts(response.data); 
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }, []);

    return (
        <React.Fragment>
            {/* Offers */}
            <div>
                <div className="offers">
                    <ul>
                        <li><b>Today's deals</b></li>
                        <li><b>Buy again</b></li>
                        <li>Gift cards</li>
                        <li>Fashion</li>
                        <li>Home</li>
                        <li>Electronics</li>
                        <li>Accessories</li>
                        <li>Gifts</li>
                        <li>Toys</li>
                    </ul>
                </div>

                {/* Hero Section */}
                <div className="heroDiv">
                    <h2>Choose your style</h2>
                </div>
            </div>

            {/* Product List */}
            <div className="productsAll"> 

                <div className="product-list">
                    {products.slice(0, 6).map((item, index) => (
                        <div key={index} className="card">
                            <img src={item.image} className="productImg" alt={item.title} />
                            <div className="descBtn"> 
                                <div className="description">   
                                    <h3>${item.price}</h3>
                                    <p className="descP">{item.title.slice(0, 20)}</p>
                                </div> 

                                <button className="detailsBtn"> Details</button>
                            </div>

                        </div>

                        
                    ))}
                </div>

                <div className="product-list">
                    {products.slice(7, 13).map((item, index) => (
                        <div key={index} className="card">
                            <img src={item.image} className="productImg" alt={item.title} />
                            <div className="descBtn"> 
                                <div className="description">   
                                    <h3>${item.price}</h3>
                                    <p className="descP">{item.title.slice(0, 20)}</p>
                                </div> 

                                <button className="detailsBtn"> Details</button>
                            </div>

                        </div>

                        
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
}

export default Main;
