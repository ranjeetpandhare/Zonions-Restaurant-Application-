import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory, useParams } from "react-router-dom";

// edit Restaurant form
const EditRestaurant = () => {
    let history = useHistory();
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState({
        RestaurtantName: "",
        OpenTime: "",
        CloseTime: "",
        updatedAt: ""
    });

    // Destructuring the data from the attributes 
    const { RestaurtantName, OpenTime, CloseTime, updatedAt } = restaurant;
    const onInputChange = e => {
        setRestaurant({ ...restaurant, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadRestaurant();
    }, []);
    //  user can edit the perticular data from the form then this api will update the data from database
    const onSubmit = async e => {
        e.preventDefault();
        // the patch method is update the data 
        await axios.patch(`http://localhost:1337/restaurtantDetails/${id}`, restaurant);
        history.push("/AdminManageRestaurant");
    };
    // to get updated data from the current page from this get meyhod 
    const loadRestaurant = async () => {
        const res = await axios.get(`http://localhost:1337/restaurtantDetails/${id}`);
        setRestaurant(res.data);
    };
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-5" style={{ color: "white" }}>Edit Restaurant</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        {/* restaurants name field */}
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Restaurant Name"
                            name="RestaurtantName"
                            value={RestaurtantName}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    {/* open time field  */}
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Open Time"
                            name="OpenTime"
                            value={OpenTime}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    {/* close time field */}
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Close Time"
                            name="CloseTime"
                            value={CloseTime}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    {/* last time updated  */}
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Last Updated "
                            name="updatedAt"
                            value={updatedAt}
                            onChange={e => onInputChange(e)}
                        />
                    </div>

                    <button className="btn btn-success btn-block">Update User</button><br />
                    <button className="btn btn-danger btn-block">Cancel</button><br />

                </form>
            </div>
        </div>
    );
};

export default EditRestaurant;
