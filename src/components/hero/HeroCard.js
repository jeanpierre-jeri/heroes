import { Link } from "react-router-dom"


const HeroCard = ({id, superhero, publisher, alter_ego, first_appearance, characters}) => {
  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card h-100" style={{width: '18rem'}}>
        <img src={`/assets/${id}.jpg`} className="card-img-top" alt={superhero} />
        <div className="card-body">
          <h5 className="card-title">{superhero}</h5>
          <p className="card-text">{alter_ego}</p>
          <p className="card-text">{first_appearance}</p>
          <Link to={`/hero/${id}`} className="btn btn-primary">Ver más...</Link>
        </div>  
        {
          (alter_ego !== characters) &&
          <div className="card-footer">
            <p className="text-muted">{characters}</p>
          </div>
        }
      </div>
    </div>
    
    
  )
}

export default HeroCard
