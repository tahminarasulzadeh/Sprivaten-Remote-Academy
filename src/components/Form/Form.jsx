import '../Form/Form.css'
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContent, getAppointment } from '../../redux/reducers/appointmentSlice';
import { MdOutlineArrowDropDown } from "react-icons/md";


const Form = () => {
  const dispatch = useDispatch();

  const [toast, setToast] = useState('');
  const [success, setSucces] = useState('');

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      department: "",
      time: "",
    },

    onSubmit: (values) => {
      const requestData = { name: values.name, email: values.email, department: values.department, time: values.time };
      if (values.name === '' || values.email === '' || values.department === '' || values.time === '') {
        setToast('Fields can not be empty')
        setSucces('')
      } else {
        setToast('');
        setSucces("Form submitted successfully!")
        dispatch(fetchContent(requestData))
        fetch("http://localhost:3000/appointments/")
          .then((res) => res.json())
          .then((result) => dispatch(getAppointment(result)))
          .catch(error => console.log(error.message));
        values.name = '';
        values.email = '';
        values.department = '',
          values.time = ''
      }



    },

    onChange: (event) => {
      console.log("handleChange is called")
      const { name, value } = event.target;
      console.log(name, value);
    },



  });


  return (
    <div className="form-layout">
      <h3 className='home-form-title'>Book Appointment</h3>
      <div className='toast-messages'>
        <p className='toast-msg'>{toast}</p>
        <p className='success-msg'>{success}</p>
      </div>

      <form onSubmit={formik.handleSubmit}>
        <div className="form-content">
          <label htmlFor="name">Name*</label>
          <input type="text" id="name" name="name" value={formik.values.name}
            onChange={formik.handleChange} placeholder='Full Name'    {...formik.getFieldProps("name")} />

          <label htmlFor="email">Email*</label>
          <input type="email" id="email" name="email" onChange={formik.handleChange}
            value={formik.values.email} placeholder='example@gmail.com'    {...formik.getFieldProps("email")} />



          <label htmlFor="department">Department*</label>
          <div className="custom-select-wrapper">
            <select name="department" id="department" value={formik.values.department} onChange={formik.handleChange}  {...formik.getFieldProps("department")}>
              <option value="Please Select">Please Select</option>
              <option value="sales">Sales</option>
              <option value="marketing">Marketing</option>
              <option value="ıt">IT</option>
              <option value="accounting">Accounting</option>

            </select>
               </div>


          <label htmlFor="time">Time*</label>
          <div className="custom-select-wrapper">
            <select name="time" id="time" value={formik.values.time}
              onChange={formik.handleChange}  {...formik.getFieldProps("time")}>
              <option value="4:00 Available">4:00 Available</option>
              <option value="3:20">3:20</option>
              <option value="7:30">7:30</option>
            </select>
          </div>

          <button className='home-form-btn'>Book Appointment</button>
        </div>

      </form>
    </div>

  )
}

export default Form;