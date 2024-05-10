import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

import Toggler from '../../assets/Vector.svg';

import "../Navbar/Navbar.css";


const Navbar = () => {
    return (

        <div className="navbar-general">

            <a  href ="#" className="brand-name">Sprivaten</a>

            <div className="navbar">

                <a className="active" href="#home">Home</a>
                <a href="#product">Product</a>
                <a href="#pricing">Pricing</a>
                <a href="#contact">Contact</a>
                <a href="#search"><IoIosSearch /></a>
                <a href="#cart"> <IoCartOutline /> </a>


            </div>

            <img className="navbar-toggler" src={Toggler} alt="toggler" />
        </div>





    )
}

export default Navbar;