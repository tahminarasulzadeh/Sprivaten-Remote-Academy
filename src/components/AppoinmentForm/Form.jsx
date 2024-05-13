import '../AppoinmentForm/Form.css'

const Form = () => {
    return (
        <div className="contact-form-content">
            <h5 className='contact-form-title'>Contact us</h5>
            <h2>Make an Appoinment</h2>
            <div className="contact-form-items">
                <div className="name-email">
                    <input type="text" placeholder='Full Name' />
                    <input type="email" placeholder='example@gmail.com' />
                </div>
                <div className="department-time">

                    <select name="department" id="department">
                        <option selected>Please Select</option>
                        <option value="sales">Sales</option>
                        <option value="marketing">Marketing</option>
                        <option value="ıt">IT</option>
                        <option value="accounting">Accounting</option>
                    </select>

                    <select name="time" id="time">
                        <option selected>4:00 Available</option>
                        <option value="3:20">3:20</option>
                        <option value="7:30">7:30</option>
                    </select>
                </div>
               <textarea name="message" id="message"  placeholder='Message'></textarea>

               <button className='contact-btn'>Book Appointment</button>
            </div>
        </div>
    )
}

export default Form;