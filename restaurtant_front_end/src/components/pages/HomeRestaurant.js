import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// home page from the zonous restaurant 
const HomeRestaurant = () => {
    const [restaurants, setRestaurant] = useState([]);

    useEffect(() => {
        loadRestaurant();
    }, []);

    //  to get all detials from restaurants

    const loadRestaurant = async () => {
        const result = await axios.get("http://localhost:1337/restaurtantDetails");
        //new record will be added then display this record first from reverse method  
        setRestaurant(result.data.reverse());
    };

    return (
        <div className="container"  >
            <div className="py-4"  >
                <h1 style={{ color: "#0fd0f5" }}>Restaurants</h1>
                <table class="table border shadow" style={{}}>
                    <thead class="thead-dark">
                        {/* restaurants coloumn name */}
                        <tr>
                            <th scope="col">Number</th>

                            <th scope="col">Restaurant Name</th>

                            <th scope="col">Restaurants Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* to iterate the data from map function  */}
                        {restaurants.map((restaurant, index) => (
                            <tr style={{ color: "white" }}>
                                <th scope="row">{index + 1}</th>
                                <td><h2>{restaurant.RestaurtantName}</h2></td>
                                <td>
                                    <Link class="btn btn-outline-dark text-dark mr-2" style={{ backgroundColor: "white" }} to={`/viewrestaurants/${restaurant.id}`}>
                                        <b>Details</b>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div style={{ backgroundImage: "url(./Image/Admin)", width: "500px", height: "300px" }}></div>
        </div>
    );
};

export default HomeRestaurant;

