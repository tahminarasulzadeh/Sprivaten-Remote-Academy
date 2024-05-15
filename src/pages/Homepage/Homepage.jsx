

import Form from "../../components/Form/Form";
import "../Homepage/Homepage.css"

const Homepage = () => {
    return (


        <div className="home">
            <div className="container home-content">
                <div className="home-card">
                    <div className="home-info">
                        <div>
                            <h1 className="home-title">Drive More <br /> Customers <br /> Through Digital</h1>
                            <h4 className="home-text">We know how large objects will act, but things on a
                                small scale.</h4>
                        </div>

                    </div>

                    <div className="home-buttons">
                        <button className="home-button-quote"> Get Quote Now</button>
                        <button className="home-button-learn"> Learn More</button>
                    </div>
                </div>

                <div className="home-form-content">
                <Form />

                </div>
            </div>

        </div>


    )
}

export default Homepage;