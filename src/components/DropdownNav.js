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
                <a className="listado"><Link to="/ItemListContainer">Meal Preps</Link>
                <Dropdown.Toggle className="flechaCateg"/>
                </a>

                <Dropdown.Menu className="MenuListado">
                    { categories.map( category => 
                    <Dropdown.Item className="categories" >
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
