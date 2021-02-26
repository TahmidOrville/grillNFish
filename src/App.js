import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Home from './Components/Home/Home'
import Header from './Components/Header/Header'
import Cart from './Components/Cart/Cart';
import FoodDetails from './Components/FoodDetails/FoodDetails';
import Login from './Components/Authentication/Login'
import Shipment from './Components/Shipment/Shipment';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import { createContext } from 'react';
import { useState } from 'react';
import Delivery from './Components/Delivery/Delivery';

export const UserContext=createContext();

function App() {

  const [loggedInUser,setLoggedInUser]=useState({});


  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <div className="App">
          <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/cart">
              <Cart></Cart>
            </Route>
            <Route path="/:category/:id">
              <FoodDetails></FoodDetails>
            </Route>
            <PrivateRoute path="/shipment">
              <Shipment></Shipment>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/delivery">
              <Delivery></Delivery>
            </PrivateRoute>
          </Switch>
          </Router>
          </div>
    </UserContext.Provider>
  );
}

export default App;
