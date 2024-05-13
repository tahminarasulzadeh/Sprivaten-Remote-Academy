 import '../TeamCard/Card.css'
 import { FaFacebookSquare,  FaInstagram , FaTwitter } from "react-icons/fa";


 const Card = ({cardImg, cardName,position}) => {
    return (
        <div className="team-card">
           <img src = {cardImg} alt={cardName}/>
           <div className="team-card-content">
            <h5 className='team-card-name'>{cardName}</h5>
            <h6 className='team-card-position'>{position}</h6>
            <div className="card-social">
             <FaFacebookSquare className='social-item'/>
             <FaInstagram className='social-item'/>
             <FaTwitter className='social-item' />
            </div>
           </div>
        </div>
    )
 }

 export default Card;