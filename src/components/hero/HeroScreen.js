import { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../../selectors/getHeroById"


const HeroScreen = () => {

  const navigate = useNavigate()
  const { heroid } = useParams()

  const hero = useMemo(() => getHeroById(heroid), [heroid])

  if (!hero) {
    return <Navigate to='/' />
  }

  const { id, superhero, publisher, alter_ego, first_appearance, characters } = hero
  
  
  const handleReturn = (publisher) => {

    publisher === 'DC Comics' ? navigate('/dc') : navigate('/marvel')

  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img src={`/assets/${id}.jpg`} alt={superhero} className="img-thumbnail animate__animated animate__fadeInLeft" />
      </div>

      <div className="col-8 animate__animated animate__fadeIn">
        <h3>{superhero}</h3>
        <ul className="list-group">
          <li className="list-group-item"><b>Alter ego: </b>{alter_ego}</li>
          <li className="list-group-item"><b>Publisher: </b>{publisher}</li>
          <li className="list-group-item"><b>First Appearance: </b>{first_appearance}</li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{characters}</p>
        <button className="btn btn-outline-info" onClick={() => handleReturn(publisher)}>Regresar</button>
      </div>
    </div>
  )
}

export default HeroScreen
