// ek file m combine kr dega is  ks naam root reducer bhi h ye sabhi file ko ek saath combine kr dega

import {combineReducer} from 'redux'
import  cartItem from './Reducer';
export default combineReducer(
    {
        cartItem
        // agar ek se jada hote to baki iske niche coma lagakar likh dete pehle import krte fir likh dete pehle
        // example == cartItem1
    }
)