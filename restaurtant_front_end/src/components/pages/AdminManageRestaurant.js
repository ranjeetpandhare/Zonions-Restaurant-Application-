import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ParticlesBg from "particles-bg";

export const AdminManageRestaurant = () => {
    const [restaurants, setRestaurant] = useState([]);

    useEffect(() => {
        loadRestaurant();
    }, []);
    // to get all data from the database 
    const loadRestaurant = async () => {
        const result = await axios.get("http://localhost:1337/restaurtantDetails");
        setRestaurant(result.data.reverse());
    };
    // to delete the perticular data using id 
    const deleteRestaurant = async id => {
        await axios.delete(`http://localhost:1337/restaurtantDetails/${id}`);
        loadRestaurant();
    };

    return (
        <div className="container" style={{ height: "600px" }} >
            <div className="py-4"><h1 className="w-75 mx-auto shadow p-10" style={{ color: "white" }}>Admin Management </h1>
                <Link className="btn btn-outline-dark" to="/NewRestaurant/Add" class="btn btn-primary mr-10" style={{ color: "white", borderRadius: "20px" }}><h3>Add New Restaurtant</h3></Link><br /><br />
                <table class="table border shadow" style={{ backgroundColor: "lightblue" }}>
                    <thead class="thead-dark">
                        {/* tabale heading names */}
                        <tr>
                            <th scope="col">Number</th>

                            <th scope="col">Restaurant Name</th>

                            <th scope="col">Restaurant Timing</th>

                            <th scope="col">Last Updated Time </th>
                            <th scope="col">Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        {restaurants.map((restaurant, index) => (
                            <tr>
                                {/* to display Add new record  data on table */}
                                <th scope="row">{index + 1}</th>
                                <td>{restaurant.RestaurtantName}</td>
                                <td>{restaurant.OpenTime}  to {restaurant.CloseTime}</td>
                                <td>{restaurant.createdAt}</td>
                                <td>
                                    <Link
                                        class="btn btn-outline-primary mr-2"
                                        to={`/restaurant/edit/${restaurant.id}`}>Edit
                                   </Link>

                                    <Link
                                        class="btn btn-outline-danger"
                                        onClick={() => {
                                            if (window.confirm('Are you sure want to delete this record..?')) {
                                                deleteRestaurant(restaurant.id)
                                            }
                                        }}>
                                        Delete
                                   </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <ParticlesBg type="cobweb" color="#db0980" bg={true} />
        </div>
    );
};

export default AdminManageRestaurant;
