import React from 'react';
import { useState } from 'react';
import FoodDetails from '../FoodDetails/FoodDetails';
import './Bill.css';

const Bill = (props) => {
    const {cart}=props;
    // console.log(cart);
    const priceArray=cart.map(pd=>pd.total);
    const cost=priceArray.reduce((sum,num)=>sum+num,0);
    let tax;
    if (cost>100) {
        tax=cost*.1
    } else{
        tax=cost*.05
    }

    const format=(num)=>{
        return num.toFixed(2)
    }
   
    return (
        <div className="billArea">
            <div className="fields">
            <p className="fieldName">Subtotal</p>
            <p className="digit">${format(cost)}</p>
            </div>

            <div className="fields">
            <p className="fieldName">Tax</p>
            <p className="digit">${format(tax)}</p>
            </div>

            <div className="fields">
            <p className="fieldName">Total</p>
            <p className="digit">${format(cost+tax)}</p>
            </div>
        </div>
    );
};

export default Bill;