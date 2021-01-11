import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import Admin from "./components/pages/Admin";
import HomeRestaurant from "./components/pages/HomeRestaurant";
import RestaurantDetails from "./components/users/RestaurantDetails";
import AddNewRestaurant from "./components/users/AddNewRestaurant";
import AdminManageRestaurant from "./components/pages/AdminManageRestaurant";
import AdminRestaurantDetails from "./components/pages/AdminRestaurantDetails";
import EditRestaurant from "./components/users/EditRestaurant";

function App(props) {
  return (
    <Router>
      <div className="App">
        <Navbar />

        {/* all routes will be redirection from each other from the above routes  */}
        <Switch>
          {/* (/) home component route */}
          <Route exact path="/" component={HomeRestaurant} />
          <Route exact path="/viewrestaurants/:id" component={RestaurantDetails} />
          <Route exact path="/Admin" component={Admin} />
          <Route exact path="/AdminManageRestaurant" component={AdminManageRestaurant} />
          <Route exact path="/adminviewrestaurants/:id" component={AdminRestaurantDetails} />
          <Route exact path="/NewRestaurant/Add" component={AddNewRestaurant} />
          <Route exact path="/restaurant/edit/:id" component={EditRestaurant} />

          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
