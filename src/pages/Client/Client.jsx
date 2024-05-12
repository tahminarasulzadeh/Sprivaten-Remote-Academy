import "../Client/Client.css"
import Card from "../../components/ClientCard/Card";
import client1 from '../../assets/client1.png';
import client2 from '../../assets/client2.png';
const Client = () => {

const client_opinion = `
 Slate helps you see how many
 more days you need to work to
 reach your financial goal.
 `

  return (
    <div className="client">
      <div className="container">
        <h2 className="title">What Clients Say</h2>
        <p className='text'> Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: Newtonian mechanics  </p>

        <div className="client-cards">
          <Card clientImg={client1} clientName="Regina Miles" clientWork="Designer" clientOp = {client_opinion} />
          <Card clientImg={client1} clientName="Regina Miles" clientWork="Designer" clientOp = {client_opinion}/>
          <Card clientImg={client2} clientName="Regina Miles" clientWork="Designer"  clientOp = {client_opinion}/>
        </div>
      </div>
    </div>

  )
}

export default Client;