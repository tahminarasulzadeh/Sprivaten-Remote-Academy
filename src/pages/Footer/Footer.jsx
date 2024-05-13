import '../Footer/Footer.css'
import '../Copyright/Copyright'
import { FaFacebookSquare, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer-header">
                    <h3>Sprivaten</h3>

                    <div className="footer-socials">
                        <FaFacebookSquare className='facebook' />
                        <FaInstagram className='instagram' />
                        <FaTwitter className='twitter' />
                        <FaYoutube className='youtube' />
                    </div>
                </div>
                <hr  />
                <div className="footer-content">
                    <div className="footer-info">
                        <h5>Company Info</h5>
                        <a href="#">About Us</a>
                        <a href="#">Carrier</a>
                        <a href="#">We are hiring</a>
                        <a href="#">Blog</a>
                    </div>

                    <div className="footer-info">
                        <h5>Legal</h5>
                        <a href="#">About Us</a>
                        <a href="#">Carrier</a>
                        <a href="#">We are hiring</a>
                        <a href="#">Blog</a>
                    </div>

                    <div className="footer-info">
                        <h5>Features </h5>
                        <a href="#">Business Marketing</a>
                        <a href="#">User Analytic</a>
                        <a href="#">Live Chat</a>
                        <a href="#">Unlimited Support</a>
                    </div>

                    <div className="footer-info">
                        <h5>Resources</h5>
                        <a href="#">IOS & Android</a>
                        <a href="#">Watch a Demo</a>
                        <a href="#">Customers</a>
                        <a href="#">API</a>
                    </div>

                    <div className="footer-info">
                        <h5>Get In Touch</h5>
                        <div className="footer-input">
                            <input type="email" name="email" placeholder="Your Email" />
                            <button>Subscribe</button>
                        </div>
                        <a href="#">Lorem impsum dolor amit</a>
                    </div>

                    
                </div>

            
            </div>
       
        </div>
    )
}

export default Footer;