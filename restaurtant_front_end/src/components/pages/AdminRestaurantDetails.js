import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

// to manage all data from restaurants to the  admin login  
const AdminRestaurantDetails = () => {
    const [restaurant, setRestaurant] = useState({
        RestaurtantName: "",
        OpenTime: "",
        CloseTime: "",
        updatedAt: ""
    });
    const { id } = useParams();
    useEffect(() => {
        loadRestaurtant();
    }, []);

    // to get the perticular record from the get method 
    const loadRestaurtant = async () => {
        const res = await axios.get(`http://localhost:1337/restaurtantDetails/${id}`);
        setRestaurant(res.data);
    };
    return (
        <div className="container py-4">
            <Link className="btn btn-primary" to="/">
                back to Home
            </Link>
            <h3 className="display-4"><i>{restaurant.RestaurtantName} Restaurant</i></h3>
            <hr />
            <ul className="list-group w-50">
                <li className="list-group-item"><b>Restaurant Name:</b> {restaurant.RestaurtantName}</li>
                <li className="list-group-item"><b>Open : </b>{restaurant.OpenTime}</li>
                <li className="list-group-item"><b>Close :</b> {restaurant.CloseTime}</li>
                <li className="list-group-item"><b>Last Updated :</b> {restaurant.updatedAt}</li>

            </ul>
        </div>
    );
};

export default AdminRestaurantDetails;
