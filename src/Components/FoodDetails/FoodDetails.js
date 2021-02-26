import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart, removeFromCart } from '../../Redux/Actions/cartActions';
import './FoodDetails.css'
const FoodDetails = (props) => {

    let {id}=useParams()
    const [count,setCount]=useState(1)
    let {foods,cart,addToCart,removeFromCart}=props;
    // console.log(cart);
    const food= foods.find(fd=>fd.id.toString()=== id)
    const {name,description,img,price}=food
  
    return (
        <div className="detailsArea">
            <div className="text">
                <h2>{name}</h2><br/>
                <h6 style={{color:"rgb(255, 218, 10)"}}>{description}</h6><br/>
                <h5>${price}</h5><br/>
                <button className="signBtn" onClick={()=>{count>1 && setCount(count-1)}}>-</button>
                <span className="number">{count}</span>
                <button className="signBtn" onClick={()=>{setCount(count+1)}}>+</button><br/>
                <button className="addCart" onClick={()=>addToCart(id,food,count)}>Add to cart</button>
            </div>
        <img src={img} alt={name} className="detailsImg"/>
        </div>
    );
};

const mapStateToProps=state=>{
    return{
        foods:state.foods,
        cart:state.cart
    }
}
const mapDispatchToProps={
    addToCart:addToCart,
    removeFromCart:removeFromCart
}
export default connect(mapStateToProps,mapDispatchToProps)(FoodDetails);