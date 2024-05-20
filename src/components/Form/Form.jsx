import '../Form/Form.css'
import { useEffect } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContent, getAppointment } from '../../redux/reducers/appointmentSlice';



const Form = () => {
  const dispatch = useDispatch();

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
        alert('Fields can not be empty')
      } else {

        dispatch(fetchContent(requestData))
        fetch("http://localhost:3000/appointments/")
          .then((res) => res.json())
          .then((result) => dispatch(getAppointment(result)))
          .catch(error => console.log(error.message));       
      }

      values.name = '';
      values.email = '';
      values.department = '',
      values.time = ''

    },

    onChange: (event) => {
      console.log("handleChange is called")
      const { name, value } = event.target;
      console.log(name, value);
    },



  });






  return (
    <form className="home-form" onSubmit={formik.handleSubmit}>
      <h3 className='home-form-title'>Book  Appointment</h3>
      <label htmlFor="name">Name*</label>
      <input name="name"

        value={formik.values.name}
        onChange={formik.handleChange}
        id="name" type="text"
        placeholder='Full Name '
        {...formik.getFieldProps("name")} />

      <label htmlFor="email" >Email*</label>
      <input name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        id="email"
        type="email"
        placeholder='example@gmail.com'
        {...formik.getFieldProps("email")}
      />

      <label htmlFor='department'>Department*</label>
      <select value={formik.values.department}
        onChange={formik.handleChange}
        name="department"
        id="department"
        {...formik.getFieldProps("department")}>
        <option value="Please Select">Please Select</option>
        <option value="sales">Sales</option>
        <option value="marketing">Marketing</option>
        <option value="ıt">IT</option>
        <option value="accounting">Accounting</option>
      </select>


      <label htmlFor='time'>Time*</label>

      <select value={formik.values.time} onChange={formik.handleChange} name="time" id="time" {...formik.getFieldProps("time")}>
        <option value="4:00 Available">4:00 Available</option>
        <option value="3:20">3:20</option>
        <option value="7:30">7:30</option>
      </select>


      <div className="home-form-btn">
        <button type="submit">Book Appointment</button>
      </div>


    </form>
  )
}

export default Form;