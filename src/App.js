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
import { useEffect } from 'react';
import { useContext } from 'react';
 

export const UserContext=createContext();
export const RateContext=createContext();
export const SelectedContext=createContext();

function App() {

  const [loggedInUser,setLoggedInUser]=useState({});
  const [selectedCurrency,setSelectedCurrency]=useState("USD")
  const [rate,setRate]=useState()
  // console.log(selectedCurrency);
 
  
  useEffect(()=>{
    fetch(`https://api.exchangerate.host/latest?base=USD&symbols=${selectedCurrency}`)
    .then(res=>res.json())
    .then(data=>{
      const rate= (data.rates[selectedCurrency]);
      setRate(rate)
    })
 },[selectedCurrency])

  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
        <RateContext.Provider value={[rate,setRate]}>
          <SelectedContext.Provider value={[selectedCurrency,setSelectedCurrency]}>
      <div className="App">
          <Router>
          <Header setSelectedCurrency={setSelectedCurrency} selectedCurrency={selectedCurrency}></Header>
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
          </SelectedContext.Provider>
          </RateContext.Provider>
    </UserContext.Provider>
  );
}


export default App;
