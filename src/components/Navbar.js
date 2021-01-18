import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import './navbar.css'
import DropdownNav from './DropdownNav';


const Navbar = ()  => {

    // const [visible, setVisible] = useState(false);

    // const handleHover = () => {
    //   setVisible((prevVisible) => (prevVisible = !prevVisible));
    // };

    return (
        <>
        <nav>
            <ul className="lista">
                <Link to="/" ><a className="listado">Home</a></Link>
                <a className="listado">About me</a>
                <DropdownNav/>
                <Link to="/cart"><CartWidget/></Link>
            </ul>
        </nav>
        </>
    )
}

export default Navbar
