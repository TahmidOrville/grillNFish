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

const Header = (props) => {

const{cart}=props;
// console.log(cart);

const [loggedInUser,setLoggedInUser]=useContext(UserContext);
// console.log(loggedInUser);
    return (
        <div>
            <Navbar className="navBar">
               <Link to="/" className="logoName"><img src={Logo} alt="home" style={{height:"80px",width:"100px"}} />GrillNFish</Link>
                <Nav className="ml-auto">
                    <p className="mr-4 navItem" id="userName">{loggedInUser.name}</p>
                    {
                        loggedInUser.email?
                        <Link to="/login" className="mr-4 navItem" onClick={()=>setLoggedInUser({})}>Sign Out</Link>:
                        <Link to="/login" className="mr-4 navItem">Sign In</Link>
                    }
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