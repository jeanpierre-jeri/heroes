import HeroCard from "./HeroCard"
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher"
import { useMemo } from "react"


const HeroList = ({publisher}) => {

  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

  return (
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 animate__animated animate__fadeIn">
        {
          heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))
        }
      </div>
  )
}

export default HeroList
