import "../ChooseCard/Card.css"

const Card = ({cardImg, cardTitle }) => {
    return (
        <div className="card-item">
        <div className="card-header">
            <div className="card-img">
                <img src={cardImg} />
            </div>
            <h5 className="choose-card-title">{cardTitle}</h5>
        </div>
        <div className="card-content">
            <h6 className="card-content-paragraph">- The best products start
                with Figma</h6>

            <h6 className="card-content-paragraph">- Design with real data  </h6>
            <h6 className="card-content-paragraph">- Lightning fast prototyping </h6>
            <h6 className="card-content-paragraph">- Fastest way to organize</h6>
            <h6 className="card-content-paragraph"> - Work at the speed of thought. </h6>

            <a href="#" className="card-content-link">Learn More</a>
        </div>
    </div>

    )
}

export default Card;