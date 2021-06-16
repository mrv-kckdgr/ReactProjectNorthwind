//reducer'a gönderdiğimiz fonksiyonlar

//sabitle
//magic string
export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"

export function addToCart(product) {
    return {
        type : ADD_TO_CART,  //gönderilen aksiyon
        payload : product    // o an sepete gönderdiğimiz ürün
    }
}


export function removeFromCart(product) {
    return {
        type : REMOVE_FROM_CART,
        payload : product
    }
}