import {ADD_TO_CART} from '../Constent'
const intialState = {

    cartData:[]
// }  isme send kiya hua data ayega || array pass kiya kyki daata kuch bhi ho skta hai add to card ya remove to card ek se jada 
}
export default function cartItem (state=intialState,action){
switch(action.type)
{
    case  ADD_TO_CART:
    return{
        ...state,
        cartData:action.data
        // action mai data aaya Actin se check kro jake
    }
    break;
    default:
        return state
}
}

// switch casr isliye lagaya kyuki case kuch bhi ho skta hai add to cart or remove to cart