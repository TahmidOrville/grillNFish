import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RateContext, SelectedContext } from '../../App';
import { addToCart, removeFromCart } from '../../Redux/Actions/cartActions';
import './FoodDetails.css'
const FoodDetails = (props) => {

    let {id}=useParams()
    const [count,setCount]=useState(1)
    let {foods,cart,addToCart,removeFromCart}=props;
    // console.log(cart);
    const food= foods.find(fd=>fd.id.toString()=== id)
    const {name,description,img,price}=food;
    const [rate]=useContext(RateContext);
    const [selectedCurrency]=useContext(SelectedContext)
    const amount= (price*rate).toFixed(2);
  
    const [added,setAdded]=useState(false);
    const handleAdd=()=>{
        addToCart(id,food,count);
        setAdded(true)
    }
    if (added===true) {
        setTimeout(()=>{
            setAdded(false)
        },500)
    }
    return (
        <div className="detailsArea">
            <div className="text">
                <h2>{name}</h2><br/>
                <h6 style={{color:"rgb(255, 218, 10)"}}>{description}</h6><br/>
                <h5>{`${selectedCurrency} ${amount}`}</h5><br/>
                <button className="signBtn" onClick={()=>{count>1 && setCount(count-1)}}>-</button>
                <span className="number">{count}</span>
                <button className="signBtn" onClick={()=>{setCount(count+1)}}>+</button><br/>
                <button className="addCart" onClick={handleAdd}>Add to cart</button> <br/>
                {added && <div id="floatingMsg"><p id="msg"><FontAwesomeIcon icon={faCheckCircle}/>Added</p></div>}
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