import React from 'react'
import {Dropdown, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom'

const categories = [{
    categoryId: 1,
    name: "Breakfast"
},
{
    categoryId: 2 ,
    name: "Dinner & Lunch"
},{
    categoryId: 3,
    name: "Ejemplo"
},{
    categoryId: 4,
    name: "Non-meat Meals"
}]

const DropdownNav = () => {
    return (
        <>
            <Dropdown >
                <Link to="/ItemListContainer"><Button className="listado mealPrep">Meal Preps</Button></Link>
                <Dropdown.Toggle className="listado mealPrep" />

                <Dropdown.Menu className="MenuListado">
                    { categories.map( category => 
                    <Dropdown.Item className="listado">
                        <Link to={`/category/${category.categoryId}`}>
                        <a>{category.name}</a>
                        </Link>
                    </Dropdown.Item>
                    )}  
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
