import '../ClientCard/Card.css'
import { FaRegStar, FaStar } from "react-icons/fa";

const Card = ({clientImg, clientName, clientWork, clientOp}) => {
    return (
        <div className="client-card">
            <div className="client-card-content">
                <div className="client-review">
                    <FaStar className='star' />
                    <FaStar className='star' />
                    <FaStar className='star' />
                    <FaStar className='star' />
                    <FaRegStar className='star' />
                </div>
                <div className="client-card-text">
                  { clientOp}
                </div>
                <div className="client-data">
                    <div className="client-card-img">
                    <img src={clientImg} alt={clientName} />

                    </div>
                 <div className="client-name-work">
                    <p className='client-name'>{clientName}</p>
                    <p className='client-work'>{clientWork}</p>
                 </div>
                </div>
            </div>
        </div>
    )
}

export default Card;