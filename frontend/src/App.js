import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from "./Pages/AboutUs/About";
import Homepage from "./Pages/Homepage/Homepage";
import FAQPage from "./Pages/FAQ/FAQ";
import BrowseRestaurant from "./Pages/BrowseRestaurant/BrowseRestaurant";
import RestaurantSystem from "./Pages/RestaurantSystem/Restaurant";
import UserSystem from "./Pages/UserSystem/User";
import Auth from "./Pages/Auth/Auth";
import AdminSystem from "./Pages/AdminSystem/Admin";


import "./App.css";

function App() {
  return (
    <Router>
      <div>
        {/* This is the starter point for Feedi. Everything will be show up in here. */}
        {/* begin miguel part */}

        <Route exact path='/' component={Homepage} />
        <Route path='/about' component={About} />
        <Route path='/FAQ' component={FAQPage} />
        <Route path='/browse' component={BrowseRestaurant} />
        <Route path='/restaurant' component={RestaurantSystem} />
        <Route path='/user' component={UserSystem} />
        <Route path='/auth' component={Auth} />
        <Route path='/admin' component={AdminSystem} />



      </div>
    </Router>
  );
}

export default App;
