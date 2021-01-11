import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import ParticlesBg from "particles-bg";

// user can click the view button on home page then this restaurant detials will be seen from the user 
const RestaurantDetails = () => {
    const [restaurant, setRestaurant] = useState({
        RestaurtantName: "",
        Address: "",
        OpenTime: "",
        CloseTime: "",
        Phone: "",
        MenuImage: ""
    });
    const { id } = useParams();
    useEffect(() => {
        loadRestaurtant();
    }, []);
    // to get all detills from the restaurant
    const loadRestaurtant = async () => {
        const res = await axios.get(`http://localhost:1337/restaurtantDetails/${id}`);
        setRestaurant(res.data);
    };
    return (
        <div className="container py-0" >
            <hr />
            <div style={{ backgroundColor: "lightblue" }}>
                <ul className="list-group w-100" >
                    <li className="list-group-item" style={{ backgroundColor: "lightblue" }}><b>RestaurantName:</b> {restaurant.RestaurtantName}</li>
                    <li className="list-group-item" style={{ backgroundColor: "lightblue" }}><b>Address: </b>{restaurant.Address}</li>
                    <li className="list-group-item" style={{ backgroundColor: "lightblue" }}><b>Timing:</b> {restaurant.OpenTime} To {restaurant.CloseTime}</li>
                    <li className="list-group-item" style={{ backgroundColor: "lightblue" }}><b>phone:</b> {restaurant.Phone}</li>
                    <li className="list-group-item" style={{ backgroundColor: "lightblue" }}><b>MenuImage:</b><img src={restaurant.MenuImage} height="280px" width="700" /></li>
                </ul>
            </div>
            <Link className="btn btn-primary" to="/">
                back to Home
            </Link>
            <ParticlesBg type="cobweb" size={100} color="#ff0000" bg={true} />
        </div>
    );
};

export default RestaurantDetails;
