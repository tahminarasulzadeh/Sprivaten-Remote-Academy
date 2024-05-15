import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

import Toggler from '../../assets/Vector.svg';

import "../Navbar/Navbar.css";


const Navbar = () => {
    const [isOpen , setIsOpen] = useState(false);

    const toggleNavbar = () => {
      setIsOpen(prevState => !prevState)
    }
    return (
        <>
            <div className="navbar-general">

                <a href="#" className="brand-name">Sprivaten</a>

                <div className="navbar">
                    <ul className="navbar-list">
                        <li>  <a className="active" href="#home">Home</a></li>
                        <li> <a href="#product">Product</a></li>
                        <li> <a href="#pricing">Pricing</a></li>
                        <li> <a href="#contact">Contact</a></li>

                    </ul>
                    <div className="navbar-items">
                        <a  href="#search"><IoIosSearch /></a>
                        <a href="#cart"> <IoCartOutline /> </a>
                        <img onClick = {toggleNavbar} className="navbar-toggler" src={Toggler} alt="toggler" />
                    </div>
                </div>
            
              
               
            </div>

            { isOpen &&(
                    <div className= "navbar-mobile">
                    <ul className= "navbar-mobile-list">
                        <li>  <a className="active" href="#home">Home</a></li>
                        <li> <a href="#product">Product</a></li>
                        <li> <a href="#pricing">Pricing</a></li>
                        <li> <a href="#contact">Contact</a></li>
    
                    </ul>
                </div>
                )
            }
          

        </>






    )
}

export default Navbar;