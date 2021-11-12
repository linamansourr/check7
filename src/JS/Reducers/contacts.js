import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM } from "../Constants/actionTypes";


const initialState = {
    contacts: [
        {
        id: Math.random(),
        fullname: "Lina Mansour",
        cin: "12345678",
        number: "9845637",
        },
        {
            id: Math.random(),
            fullname: "Julien Al",
            cin: "4563789",
            number: "98765435",
            },
            {
                id: Math.random(),
                fullname: "Juliette Ju",
                cin:"64537299",
                number: "3737373",
                },
    ]
};

export const contactReducers = (state = initialState, action) =>{
 switch(action.type)
 {
     case ADD_ITEM:
         return{...state,contacts:[...state.contacts,action.payload]};
         case EDIT_ITEM:
             return{};
             case DELETE_ITEM:
                 return{
                     ...state,
                     contacts: state.contact.filter(
                         (contact) => contact.id !==action.payload
                     ),
                 };
                 default:
                     return state;
 }
};