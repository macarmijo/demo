import React from 'react'
import {Dropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom'

const categories = [
    {categoryId: "Breakfast"},
    {categoryId: "Dinner & Lunch"},
    {categoryId: "Ejemplo"},
    {categoryId: "Non-meat Meals"}
]

const DropdownNav = () => {
    return (
        <>
            <Dropdown>
                <a className="listado"><Link to="/ItemListContainer">Meal Preps</Link>
                <Dropdown.Toggle className="flechaCateg"/>
                </a>

                <Dropdown.Menu className="MenuListado">
                    { categories.map( category => 
                    <Dropdown.Item className="categories" >
                        <Link to={`/category/${category.categoryId}`}>
                            <a>{category.categoryId}</a>
                        </Link>
                    </Dropdown.Item>
                    )}  
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default DropdownNav
