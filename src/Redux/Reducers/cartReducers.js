import data from '../../fakedata/data'
import { CONTROL_QUANTITY, ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from '../Actions/cartActions'

const foods=data.slice(0,18)

const initialState={
    cart:[],
    foods:foods
}

const cartReducers=(state=initialState,action)=>{
    switch(action.type){
        case ADD_TO_CART:

            let newCart;
            const sameFood= state.cart.find(f=>f.foodId===action.id);

            if (sameFood) {
                
                let previousQuantity= sameFood.quantity;
                sameFood.quantity=previousQuantity+action.count;
                sameFood.total=action.food.price*(previousQuantity+action.count);
                // console.log(sameFood);
                newCart=[...state.cart]
            }
    
            else{
                const newItem={
                    foodId:action.id,
                    food:action.food,
                    // cartId:state.cart.length+1,
                    quantity:action.count,
                    total:action.food.price*action.count,  
                }
                 newCart=[...state.cart,newItem]
            }
            return {...state,cart:newCart}
            
        case REMOVE_FROM_CART:
            const remainingCart=state.cart.filter(fd=>fd.foodId!==action.id)
            return {...state,cart:remainingCart}

        case CONTROL_QUANTITY:

            const fd= state.cart.find(f=>f.foodId===action.id);
                fd.quantity=action.count;
                fd.total=action.food.price*action.count;
                 const updatedCart=[...state.cart];
                 return{...state,cart:updatedCart}
            
        case CLEAR_CART:
            return {...state,cart:[]}
        default:
            return state;
    }
}
export default cartReducers;