import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM } from "../Constants/actionTypes";
import { contactReducers } from "../Reducers/contacts";

export const addItem=(contact)=>{

    return{
        type: ADD_ITEM
        payload: contact,
    }
}
export const deleteItem=(payload)=>{

    return{
        type: DELETE_ITEM
        payload: id,
    }
}
export const editItem=(payload)=>{

    return{
        type: EDIT_ITEM
        payload,
    }
}