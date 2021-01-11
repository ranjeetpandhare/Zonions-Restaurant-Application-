
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
export class Admin extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: "",
      password1: "",
      flag: false

    }
  }
  onChangesaacda = (e) => {
    var nme = e.target.name;
    var value = e.target.value;

    this.setState({ [nme]: value });
  }
  //When Admin clike on login  button this fuction is called and gose to admin managment restaurant page 
  onSubmitHandler = (e) => {
    e.preventDefault();
    var username = this.state.username
    var password = this.state.password1
    //to set username will be (admin) and password will be (admin)
    if (username === "admin" && password === "admin") {

      alert("Admin login successfully.....");
      this.setState({ flag: true })
      this.props.history.push('/AdminManageRestaurant')

    }
    // wrong username and password then this alert msg is provided from screen 
    else {
      alert("This is not authorized Admin Please Enter Valid Username & Password....")
    }
  }

  render() {
    return (
      <div className="container" style={{ height: "600px" }} >
        <div className="py-4"  >
          <Form className="w-50 mx-auto shadow p-5" style={{ marginTop: "50px", backgroundColor: "lightblue", height: "400px" }} >
            <h1>Admin Login </h1>
            <div >

              {/* username field  */}
              <FormGroup>
                <Label for="exampleEmail">UserName</Label>
                <Input type="text"
                  name="username"
                  required
                  maxLength={"20"}
                  id="exampleEmail"
                  value={this.state.username}
                  onChange={this.onChangesaacda}
                  placeholder="Enter UserName "
                />
              </FormGroup>

              {/* password field */}
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password"
                  name="password1"
                  required
                  maxLength={"10"}
                  id="examplePassword"
                  value={this.state.password1}
                  onChange={this.onChangesaacda}
                  placeholder="Enter Password"
                />
              </FormGroup>

            </div>

            {/* user click on login button then page will redirected from AdminManageRestaurant */}
            <Link to={'/AdminManageRestaurant'}> <Button type="submit" className="btn btn-outline-success btn-lg" onClick={this.onSubmitHandler}>Log In</Button></Link>
            {/* user click on cancel button then page will redirected from Home page restaurant */}
            <Link to={'/'}> <Button type="submit" className="btn btn-outline-danger btn-lg" style={{ marginRight: "5px" }}>Cancel</Button></Link>
          </Form>
        </div>
      </div>
    )
  }
}

export default Admin

