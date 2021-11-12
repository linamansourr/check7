import React from "react";
import{ Contrainer, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";



export default function Navbar() {
    return (
    <div>
        <Menu size="large">
            <Contrainer>
                    <Menu.Item as="a" active><Link to="/Home">Home</Link> </Menu.Item>

                    <Menu.Item as="a"><Link to="/list">List Contact</Link></Menu.Item>

                    <Menu.Item as="a"> <Link to="/add">Add Contact</Link></Menu.Item>


            </Contrainer>
        </Menu>
    </div>
    );
}


