export const ADD_TO_CART="ADD_TO_CART";
export const REMOVE_FROM_CART="REMOVE_FROM_CART";
export const CONTROL_QUANTITY="CONTROL_QUANTITY";
export const CLEAR_CART="CLEAR_CART"

export const addToCart=(id,food,count)=>{
    return{type:ADD_TO_CART,id,food,count}
}
export const removeFromCart=(id)=>{
    return{type:REMOVE_FROM_CART,id}
}
export const controlQuantity=(id,food,count)=>{
    return{type:CONTROL_QUANTITY,id,food,count}
}
export const clearCart=()=>{
    return{type:CLEAR_CART}
}

