import React from 'react'
import { useSelector } from "react-redux"
import ContactCard from './ContactCard';

 function ContactList() {
     const contact = useSelector((state) => state.contactReducers.contacts);
    return <div>  
            {contact.map((el, key)=> (
                <ContactCard key={el.id} el={el} />
            ))}   
         </div>;
    
}
export default ContactList;