import '../Form/Form.css'

const Form = () => {
    return (
       <div className="home-form"> 
       
       <h3 className='home-form-title'>Book  Appointment</h3>
         <label htmlFor="name">Name*</label>
         <input name ="name" id="name" type="text" placeholder='Full Name '/>

         <label htmlFor="email">Email*</label>
         <input name="email" id="email" type="email" placeholder='example@gmail.com'/>

         <label htmlFor='department'>Department*</label>
        
         <select name="department" id="department">
         <option selected>Please Select</option>
         <option value="sales">Sales</option>
         <option value="marketing">Marketing</option>
         <option value="ıt">IT</option>
         <option value="accounting">Accounting</option>
         </select>


         <label htmlFor='time'>Time*</label>
        
        <select name="time" id="time">
        <option selected>4:00 Available</option>
        <option value="3:20">3:20</option>
        <option value="7:30">7:30</option>
        </select>


       <input className='home-form-btn' type="buttpn" value="Book Appointment"/>
     
       </div>
    )
}

export default Form;