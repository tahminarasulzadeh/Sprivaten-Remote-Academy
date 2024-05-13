import '../Appointment/Appointment.css'
import Form from '../../components/AppoinmentForm/Form';
const Appointment = () => {
    return (
        <div className="appointment">
            <div className="container">
              <div className="appointment-form">
                <Form/>
              </div>
            </div>
        </div>
    )
}

export default Appointment;