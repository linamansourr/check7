import React from 'react'
import { Button, Form } from 'semantic-ui-react';
import {useDispatch} from "react-redux";
import { addItem } from "../JS/Actions/actions";
import { useState } from 'react';

function AddContact(){
    const [name, setName] = useState("");
    const [cin, setCin] = useState("");
    const [number, setNumber] = useState("");
    const dispatch = useDispatch();
    const handleContact=(e)=>{
     e.preventDefault();
     const contact={
        id:Math.random(),
        name,
        cin,
        number,
    };
    dispatchEvent(addItem(contact));
};


    return(
        <div>
            <Form>
                <Form.Field>
                    <label>Name</label>
                    <input 
                    value={name}
                    placeholder= "Name"
                    name = "name"
                    type= "text"
                    onChange= {(e)=>{
                        setName(e.target.value);
                    }

                    }
                    />
                </Form.Field>
                <Form.Field>
                    <labe>Phone</labe>
                    <input 
                    value={number}
                    placeholder="number"
                    name="number"
                    type = "number"
                    onChange={(e)=>{
                        setNumber(e.target.value);
                    }
                    }
                    />

                </Form.Field>
                <Form.Field>
                    <labe>CIN</labe>
                    <input 
                    value={cin}
                    placeholder="cin"
                    name="cin"
                    type = "cin"
                    onChange={(e)=>{
                        setCin(e.target.value);
                    }
                    }
                    />

                </Form.Field>

                <Button type="submit" onClick={handleContact}>
                    Save
                </Button>

            </Form>

        </div>
    )
                }