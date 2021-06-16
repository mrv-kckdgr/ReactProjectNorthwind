//Tüm state leri topladığım yer

import { combineReducers } from "redux";
import cartReducer from "./reducer/cartReducer";

const rootReducer = combineReducers({
    cart:cartReducer
})

export default rootReducer;