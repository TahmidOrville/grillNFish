import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import './CartProducts.css';
const CartProducts = (props) => {
    const {product,addToCart,removeFromCart,controlQuantity}=props;
   const {food,quantity,foodId}=product
    const {name,img,price}=food;

    let [count,setCount]=useState(quantity)
    // console.log(count);
     const handleAdd=()=>{
        setCount(count+1);
        controlQuantity(foodId,food,count+1)
     }
     const handleMinus=()=>{
         setCount(count-1);
         controlQuantity(foodId,food,count-1)
     }
     const handleRemove=()=>{
         removeFromCart(foodId)
     }
    // console.log(quantity);
    return (
        <div className="cartProduct">
            <div className="firstColumn">
                <img src={img} alt={name}/>
            </div>
            <div className="secondColumn">
                <h5>{name}</h5>
                <h3>${price}</h3>
                <Button variant="danger" className="mt-5 removeBtn" size="sm" onClick={()=>removeFromCart(foodId)}>Remove</Button>
            </div>
            <div className="thirdColumn">
                    <button className="cartCountBtn" onClick={handleAdd}>+</button>
                    <p id="cartQuantity">{quantity}</p>
                    <button className="cartCountBtn" onClick={count>1 ? handleMinus : handleRemove}>-</button>
            </div>
        </div>
    );
};

export default CartProducts;