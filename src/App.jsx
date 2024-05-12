import Header from "./components/Header/Header"
import Choose from "./pages/Choose/Choose"
import Provide from "./pages/Provide/Provide"
import Client from "./pages/Client/Client"
import Team from "./pages/Team/Team"

function App() {

  return (
    <>
      <Header></Header>
      <Choose/>
      <Provide />
      <Client />
      <Team/>
    </>
  )
}

export default App
