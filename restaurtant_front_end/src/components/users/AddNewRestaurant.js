import Axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FormGroup, Label, Input } from 'reactstrap';

//add new restaurants data 
const AddNewRestaurant = () => {
  let history = useHistory();
  const [RestaurtantName, setRestaurtantName] = useState('');
  const [Address, setAddress] = useState('');
  const [Phone, setPhone] = useState('');
  const [OpenTime, setOpenTime] = useState('');
  const [CloseTime, setCloseTime] = useState('');
  const [MenuImage, setMenuImage] = useState('');

  //to upload image the then image is converted from binary format and retrive the data from read as data url 

  // eq - image data will be look like this ["data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhM..."]

  const uploadImage = (e) => {
    var file = e.target.files[0]
    var reader = new FileReader();
    reader.onloadend = () => {
      setMenuImage(reader.result)
    };
    var res = reader.readAsDataURL(file);
  };
  // all form valadation from the form field 
  const formValidation = () => {

    // the name is empty then
    if (RestaurtantName.length == 0) {
      alert(" Please Enter Restaurtant Name")
      return false;
    }
    // name fied added special charcter them 
    else if (!RestaurtantName.match(/^([a-zA-Z0-9]+\s?)*$/)) {
      alert(" Please Enter Valid Restaurtant Name Not allow for special characters")
      return false;
    }
    // address field will be empty
    else if (Address.length == "") {
      alert("please Enter Details Address");
      return false;
    }
    // phone should not 10 digit
    else if (Phone.length != 10) {
      console.log(Phone.length)
      alert("please Enter 10 Digit number")
      return false;
    }
    // phone should start from 7,8,9 number only 
    else if (!Phone.match(/[7-9][0-9]{9}$/)) {
      alert("Start Number will be 7 or 8 or 9")
      return false;
    }
    // manadentory filed 
    else if (OpenTime == "") {
      alert("please Enter Open Time and Time Should be 24 HR format");
      return false;
    }
    // manadentory filed 
    else if (CloseTime == "") {
      alert("please Enter Close Time and Time Should be 24 HR format");
      return false;
    }
    else {
      return true;
    }
  }
  // to submit all data from using axios post method data will be addedd in database 
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(RestaurtantName, " ", Address, " ", Phone, " ", OpenTime, " ", CloseTime);
    const isValidate = formValidation();
    if (isValidate) {
      Axios.post(`http://localhost:1337/restaurtantDetails`, { RestaurtantName: RestaurtantName, Address: Address, Phone: Phone, OpenTime: OpenTime, CloseTime: CloseTime, MenuImage: MenuImage })
        .then(res => {
          console.log(res.data);
          // data will added successfully then redirect from AdminManageRestaurant page 
          history.push("/AdminManageRestaurant");
        })
        .catch(error => {
          console.log(error);
        })
    }

  };

  return (
    <div className="container" >
      <div className="w-50 mx-auto shadow p-1 mb-5" style={{ color: "white" }}>
        <h2 className="text-center mb-4" style={{ color: "#06a1bf" }}>Add New Restaurant</h2>
        <form onSubmit={e => onSubmit(e)}>

          {/* RestaurtantName */}
          <FormGroup>
            <Label for="exampleEmail" sm={10} size="lg">Add New Restaurant</Label>
            <Input
              type='text' name="RestaurtantName"
              value={RestaurtantName}
              onChange={e => { setRestaurtantName(e.target.value) }} />
          </FormGroup>

          {/* address */}
          <FormGroup>
            <Label for="exampleText" sm={10} size="lg">Enter Your Address</Label>
            <Input type="textarea" name="Address" id="exampleText"
              value={Address}
              onChange={e => { setAddress(e.target.value) }} />
          </FormGroup>

          {/* phonenumber */}
          <FormGroup>
            <Label for="exampleNumber" sm={20} size="lg"> PhoneNumber</Label>
            <Input
              type="number"
              name="Phone"
              id="exampleNumber"
              value={Phone}
              onChange={e => { setPhone(e.target.value) }}
            />
          </FormGroup>

          {/* Opening time */}
          <FormGroup>
            <Label for="exampleTime" sm={20} size="lg"> Opening Time</Label>
            <Input
              type="time"
              name="OpenTime"
              value={OpenTime}
              onChange={e => { setOpenTime(e.target.value) }}
            />
          </FormGroup>

          {/* Closing time */}
          <FormGroup>
            <Label for="exampleTime" sm={20} size="lg"> Closing Time</Label>
            <Input
              type="time"
              name="CloseTime"
              value={CloseTime}
              onChange={e => { setCloseTime(e.target.value) }}
            />
          </FormGroup>

          {/* Menu image  */}
          <FormGroup>
            <Label for="exampleFile" sm={20} size="lg">File</Label>
            <Input type="file"
              accept=".jpg,.png"
              onChange={(e) => uploadImage(e)} />

            <img src={MenuImage} alt=" Diplay Image " width="150" height='150' />
          </FormGroup>

          <button type="submit" className="btn btn-primary btn-block">Add New Restaurant</button><br />
          <Link to={'/AdminManageRestaurant'}><button type="submit" className="btn btn-danger btn-block">Cancel</button></Link>
        </form>
      </div>
    </div>
  );
};

export default AddNewRestaurant;