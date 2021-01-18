import React from 'react'
import {Dropdown, Button, ButtonGroup} from 'bootstrap';

// import { Link } from 'react-router-dom'

const categories = [{
    categoryId: "1",
    name: "Breakfast"
},
{
    categoryId: "2" ,
    name: "Dinner & Lunch"
},{
    categoryId: "3",
    name: "ejemplo"
},{
    categoryId: "4",
    name: "Non-meat Meals"
}]

const DropdownNav = () => {
    return (
        <>
            <Dropdown as={ButtonGroup}>
            <Button >Split Button</Button>

            <Dropdown.Toggle id="dropdown-split-basic" />

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
        
                {/* { categories.map( category => 
                <Dropdown.Item as="button">
                    <Link to={`/category/${category.categoryId}`}>
                    <a className="listado">{category.name}</a>
                    </Link>
                </Dropdown.Item>
                )}       */}
        </>
    )
}

export default DropdownNav
