import Header from "./components/Header/Header"
import Choose from "./pages/Choose/Choose"
import Provide from "./pages/Provide/Provide"
import Client from "./pages/Client/Client"
import Team from "./pages/Team/Team"
import Appointment from "./pages/Appointment/Appointment"
import Consulting from "./components/Consulting/ Consulting"
import Footer from './pages/Footer/Footer'
import Copyright from "./pages/Copyright/Copyright"

function App() {

  return (
    <>
      <Header></Header>
      <Choose/>
      <Provide />
      <Client />
      <Team/>
      <Appointment />
      <Consulting />
      <Footer />
      <Copyright/>
    </>
  )
}

export default App
