import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addToCart, controlQuantity, removeFromCart } from '../../Redux/Actions/cartActions';
import Bill from '../Bill/Bill';
import CartProducts from '../CartProducts/CartProducts';
import logo from '../../grillNFishLogo.png';
import './Cart.css'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Cart = (props) => {

const {cart,addToCart,removeFromCart,controlQuantity}=props;
// console.log(cart);

    return (
            <div className="cartContainer">
                <div className="billPart">
                        <Bill
                        cart={cart}></Bill>
                       {
                           cart.length>0 &&
                           <Link to="/shipment"><Button variant="primary" className="checkoutBtn">Proceed Checkout</Button><br/></Link>
                       }
                       <img src={logo} alt=""/>
                 </div>
                 
                 <div className="cartProductArea">
                 {
                     cart.map(product=><CartProducts
                     key={product.foodId}
                      product={product}
                      addToCart={addToCart}
                      removeFromCart={removeFromCart}
                      controlQuantity={controlQuantity}></CartProducts>)
                 }
                 </div>
                 
            </div>
    );
};


const mapStateToProps=state=>{
    return{
        cart:state.cart
    }
}
const mapDispatchToProps={
    addToCart:addToCart,
    removeFromCart:removeFromCart,
    controlQuantity:controlQuantity
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart);