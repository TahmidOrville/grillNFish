import React from 'react';
import './Shipment.css';
import TextField from '@material-ui/core/TextField';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import logo from '../../grillNFishLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faConciergeBell } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { AddressContext, UserContext } from '../../App';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { clearCart} from '../../Redux/Actions/cartActions';

const Shipment = (props) => {

const [loggedInUser]=useContext(UserContext);
const [info,setInfo]=useContext(AddressContext);

    const {cart,clearCart}=props;
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
    
    // const [info,setInfo]=useState({
    //     phone:'',
    //     address:''
    // })
    const handleBlur=(e)=>{
        const filledInfo={...info}
        filledInfo[e.target.name]=e.target.value
        setInfo(filledInfo)
    }
    return (
        <div className="shipArea">
        <form  noValidate autoComplete="off" className="shipForm">
      <TextField id="outlined-basic" label="Name" variant="outlined" className="shipField" defaultValue={loggedInUser.name} required/>
      <TextField id="outlined-basic" label="Email" variant="outlined" className="shipField" defaultValue={loggedInUser.email} required/>
      <TextField id="outlined-basic" type="number" name='phone' label="Phone Number" onBlur={handleBlur} variant="outlined" className="shipField" required/>
      <TextField
          id="outlined-textarea"
          name='address'
          label="Address"
          onChange={handleBlur}
          multiline
          variant="outlined"
          className="shipField"
          required
        />
        {
            (info.phone && info.address) ? <Link to="/delivery" className="orderBtnLink"><Button variant="primary" id="orderBtn" onClick={clearCart}><FontAwesomeIcon icon={faConciergeBell} style={{fontSize:"larger",marginRight:"10px"}}/>Place Order</Button></Link> : <Link to="/delivery" className="orderBtnLink"><Button variant="primary" id="orderBtn" disabled><FontAwesomeIcon icon={faConciergeBell} style={{fontSize:"larger",marginRight:"10px"}} />Place Order</Button></Link> 
        }
       </form>
       <div className="checkArea">
        <div className="shipTotal">
            <p className="shipProperty">FOOD COST</p>
            <p className="shipCost">${format(cost+tax)}</p>
            </div>
            <div className="shipTotal">
            <p className="shipProperty">DELIVERY FEE</p>
            <p className="shipCost">$1.2</p>
            </div>
            <div className="shipTotal">
            <p className="shipProperty">BILL</p>
            <p className="shipCost">${format(cost+tax+1.2)}</p>
            </div>
          <img src={logo} alt="FishNGrill" id="shipLogo"/>
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
   clearCart: clearCart
}
export default connect(mapStateToProps,mapDispatchToProps)(Shipment);