//Sepetin son halini tuttuğumuz yer (gönderdiğimiz aksiyona göre)

import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems"

//default state
// birden fazla ürün olabilir
const initialState = {
    cartItems:cartItems,
    //x:1,
    //y:2
}
export default function cartReducer(state=initialState, {type, payload}) {
    switch (type) {
        case ADD_TO_CART:
            let product = state.cartItems.find(c=>c.product.id===payload.id)
            if (product) {
                product.quantity++;  //güncellenmesi için referansın değişmesi lazım
                return {
                    ...state  //yeni bir obje oluşturmak
                };
            } else {
                // push olunca referans değişmez
                //Yepyeni bir ürün ekleriz
                return {
                    ...state,
                    cartItems:[...state.cartItems, {quantity:1, product:payload}]
                };
            }

            case REMOVE_FROM_CART:
                return {
                    ...state,
                    cartItems:state.cartItems.filter(c=>c.product.id!==payload.id)
                };
           
    
        default:
            return state;
            
    }
}