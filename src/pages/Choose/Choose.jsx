import "../Choose/Choose.css"
import cardImg from '../../assets/webDev.png'
import firmImg from '../../assets/firms.png'
import digitalImg from '../../assets/digital.png'
import Card from "../../components/ChooseCard/Card"
const Choose = () => {

    return (
        <div className="choose">
            <div className="container">
            <div className="choose-content">
               
               <div className="choose-paragraph">
                 <h2 className="title">WHY <br/> CHOOSE US</h2>
                     <p className="text">Problems trying to resolve the conflict between<br />
                         the two major realms of Classical physics: Newtonian mechanics </p>
           
                 </div>
                
 
 
                 <div className="choose-cards">
                     <div className="choose-cards-content">
                     <Card cardImg={cardImg} cardTitle="Web Development" />
                     <Card cardImg={firmImg} cardTitle="National top 50 firms" />
                     <Card cardImg={digitalImg} cardTitle="Digital Marketing" />
                     </div>
                    
                 </div>
             </div>
 
            </div>
           
        </div>
    )
}

export default Choose;