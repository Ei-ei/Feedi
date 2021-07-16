import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from "./Pages/AboutUs/About";
import Homepage from "./Pages/Homepage/Homepage";
import FAQPage from "./Pages/FAQ/FAQ";
import BrowseRestaurant from "./Pages/BrowseRestaurant/BrowseRestaurant";
import RestaurantSystem from "./Pages/RestaurantSystem/Restaurant";
import UserSystem from "./Pages/UserSystem/User";
import Login from "./Pages/Auth/Login/Login";
import SignUp from "./Pages/Auth/SignUp/SignUp";
import Feeder from "./Pages/Auth/FeederSignup/Feeder";
import Partner from "./Pages/Auth/RestaurantPartnership/Partner";
import AdminSystem from "./Pages/AdminSystem/Admin";


import "./App.css";

function App() {
  return (
    <Router>
      <div>
        {/* This is the starter point for Feedi. Everything will be show up in here. */}
        {/* begin miguel part */}
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/about' component={About} />
          <Route path='/FAQ' component={FAQPage} />
          <Route path='/browse' component={BrowseRestaurant} />
          <Route path='/restaurant' component={RestaurantSystem} />
          <Route path='/user' component={UserSystem} />
          <Route path='/admin' component={AdminSystem} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={SignUp} />
          <Route path='/feeder' component={Feeder} />
          <Route path='/partner' component={Partner} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
