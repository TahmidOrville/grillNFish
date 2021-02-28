import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFish } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import {Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from "../../grillNFishLogo.png"
import './Header.css'
import { connect } from 'react-redux';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useEffect } from 'react';
import { useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

  
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const style={
      backgroundColor:"rgb(124, 117, 117)",
      color:"blanchedalmond"
  };
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 150,
        backgroundColor:style.backgroundColor,
        color:style.color
      },
    },
  };
  
const Header = (props) => {

const{cart,selectedCurrency,setSelectedCurrency}=props;
// console.log(cart);

const [loggedInUser,setLoggedInUser]=useContext(UserContext);
// console.log(loggedInUser);
const [currency,setCurrency]=useState([])

useEffect(()=>{
    fetch("https://api.exchangerate.host/latest?base=USD")
    .then(res=>res.json())
    .then(data=>setCurrency([...Object.keys(data.rates)]))
  },[])
 
   
    return (
        <div>
            <Navbar className="navBar">
               <Link to="/" className="logoName"><img src={Logo} alt="home" style={{height:"80px",width:"100px"}} />GrillNFish</Link>
              
                <Nav className="ml-auto">
                        {/* <select className="mr-4 currency" onChange={(e)=>setSelectedCurrency(e.target.value)}>
                         
                           {
                                currency.map(cr=>(
                                    <option value={cr}>{cr}</option>
                                ))
                            }
                        </select> */}
                               

                    <p className="navItem" id="userName">{loggedInUser.name}</p>
                    {
                        loggedInUser.email?
                        <Link to="/login" className="navItem" onClick={()=>setLoggedInUser({})}>Sign Out</Link>:
                        <Link to="/login" className="navItem">Sign In</Link>
                    }
                     <Select
                                className="currency navItem"
                                onChange={(e)=>setSelectedCurrency(e.target.value)}
                                MenuProps={MenuProps}
                                value={selectedCurrency}
                                >
                                {currency.map((cr) => (
                                    <MenuItem key={cr} value={cr}>
                                    {cr}
                                    </MenuItem>
                                ))}
                                </Select>
                    <Link to="/cart" className="mr-4 navItem" id="fish"><FontAwesomeIcon icon={faFish} style={{fontSize:"larger"}} /><span id="fishNumber">{cart.length}</span></Link>
                </Nav>
            </Navbar>
        </div>
    );
};

const mapStateToProps=state=>{
    return{
        cart:state.cart
    }
}

export default connect(mapStateToProps)(Header);