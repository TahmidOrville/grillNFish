import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { RateContext, SelectedContext } from '../../App';
import FoodDetails from '../FoodDetails/FoodDetails';
import './Bill.css';

const Bill = (props) => {
    const {cart}=props;
    // console.log(cart);
    const priceArray=cart.map(pd=>pd.total);
    const cost=priceArray.reduce((sum,num)=>sum+num,0);
    const [rate]=useContext(RateContext);
    const [selectedCurrency]=useContext(SelectedContext)
    const amount= (cost*rate);
    let tax;
    if (cost>100) {
        tax=amount*.05
    } else{
        tax=amount*.02
    }

    const format=(num)=>{
        return num.toFixed(2)
    }
   
    return (
        <div className="billArea">
            <div className="fields">
            <p className="fieldName">Subtotal</p>
            <p className="digit">{`${selectedCurrency} ${format(amount)}`}</p>
            </div>

            <div className="fields">
            <p className="fieldName">Tax</p>
            <p className="digit">{`${selectedCurrency} ${format(tax)}`}</p>
            </div>

            <div className="fields">
            <p className="fieldName">Total</p>
            <p className="digit">{`${selectedCurrency} ${format(amount+tax)}`}</p>
            </div>
        </div>
    );
};

export default Bill;