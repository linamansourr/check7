import React from 'react'
import { Button, Card, CardContent, Image } from "semantic-ui-react"
import {deleteItem} from "../JS/Actions";
import {useDispatch} from "react-redux";

function ContactCard({ el }) {
    const dispatch = useDispatch();
    return(
        <Card>
            <Card.Content>
                <Image
                floated="right"
                size="mini"
                src="https://semantic-ui.com/"
                
                />

                <Card.Header>{el.fullname}</Card.Header>
                <Card.Meta>{el.cin}</Card.Meta>
                <Card.Description><strong>{el.number}</strong></Card.Description>

            </Card.Content>
            <Card.Content extra>
                <div className="ui two buttons">
                    <Button basic color="green">
                        Edit
                    </Button>
                    <Button basic color="red"
                    onClick={() =>dispatch(deleteItem(el.id))}>Delete</Button>
                </div>

            </Card.Content>
        </Card>
    )
}
export default ContactCard;