import Card from '../../components/TeamCard/Card';
import '../Team/Team.css'
import Cover1 from '../../assets/cover.png'
import Cover2 from '../../assets/cover1.png'
import Cover3 from '../../assets/cover2.png'

const Team = () => {
    return (
        <div className="team">
            <div className="container">
                <h2 className='title'>Meet Our Team</h2>
                <p className='text'>Problems trying to resolve the conflict between <br />
                    the two major realms of Classical physics: Newtonian mechanics </p>

                <div className="team-cards">
                    <Card cardImg ={Cover1} cardName ="Avie Beaton" position = "CO Founder"/>
                    <Card cardImg={Cover2} cardName="Ben Jonson" position = "Consultant" />
                    <Card cardImg={Cover3} cardName="Ashley Fletcher" position = "CEO"/>
                </div>
            </div>
        </div>
    )
}

export default Team;