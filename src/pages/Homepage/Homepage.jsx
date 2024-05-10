

import Form from "../../components/Form/Form";
import "../Homepage/Homepage.css"

const Homepage = () => {
    return (
   
            
  <div className="home container">
           
            <div className="home-card">
                <h1 className="home-title">Drive More <br /> Customers <br /> Through Digital</h1>
                <h4 className="home-text">We know how large objects will act, but things on a
                    small scale.</h4>
                <div className="home-buttons">
                 <button className="home-button-quote"> Get Quote Now</button>
                 <button className="home-button-learn"> Learn More</button>
                </div>
            </div>
            <Form/>
        </div>

      
    )
}

export default Homepage;