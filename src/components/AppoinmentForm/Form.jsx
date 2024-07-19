import '../AppoinmentForm/Form.css';
import { MdOutlineArrowDropDown } from "react-icons/md";

const Form = () => {
    return (
        <div className="contact-form-content">
            <div className="contact-titles">
                <div>
                    <h5 className='contact-form-title'>Contact us</h5>
                    <h2>Make an <br />Appoinment</h2>
                </div>

            </div>

            <div className="contact-form-general">
                <div className="contact-form-items">
                    <div className="name-email">
                        <input type="text" placeholder='Full Name' />
                        <input type="email" placeholder='example@gmail.com' />
                    </div>
                    <div className="department-time">
                        <div className="select-wrapper">
                            <select name="department" id="department">
                                <option selected>Please Select</option>
                                <option value="sales">Sales</option>
                                <option value="marketing">Marketing</option>
                                <option value="ıt">IT</option>
                                <option value="accounting">Accounting</option>
                            </select>
                            <MdOutlineArrowDropDown className='dropdown' />
                        </div>


                        <div className="select-wrapper">
                            <select name="time" id="time">
                                <option selected>4:00 Available</option>
                                <option value="3:20">3:20</option>
                                <option value="7:30">7:30</option>
                            </select>
                            <MdOutlineArrowDropDown className='dropdown' />
                            </div>
                    </div>
                    <textarea name="message" id="message" placeholder='Message'></textarea>

                    <div className="contact-btn">
                        <input class="contact-btn" type="button" value="Book Appointment" />

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Form;