import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import appointmentSlice from './redux/reducers/appointmentSlice';


import Header from "./components/Header/Header"
import Choose from "./pages/Choose/Choose"
import Provide from "./pages/Provide/Provide"
import Client from "./pages/Client/Client"
import Team from "./pages/Team/Team"
import Appointment from "./pages/Appointment/Appointment"
import Consulting from "./components/Consulting/ Consulting"
import Footer from './pages/Footer/Footer'
import Copyright from "./pages/Copyright/Copyright"



const store = configureStore({
  reducer: appointmentSlice,
});

function App() {

  return (

    <Provider store={store}>
      <Header />
      <Choose />
      <Provide />
      <Client />
      <Team />
      <Appointment />
      <Consulting />
      <Footer />
      <Copyright />
   
    </Provider>

  )
}

export default App
