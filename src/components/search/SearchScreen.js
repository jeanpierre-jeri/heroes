import {useForm} from '../../hooks/useForm'
import { getHeroesByName } from '../../selectors/getHeroesByName'
import HeroCard from '../hero/HeroCard'
import queryString from 'query-string'
import { useLocation, useNavigate } from 'react-router-dom'
import { useMemo } from 'react'

const SearchScreen = () => {

  const location = useLocation()
  const navigate = useNavigate()

  const {q = ''} = queryString.parse(location.search)


  const [{searchText}, handleInputChange] = useForm({searchText: q})
  
  const heroesFiltered = useMemo(() => getHeroesByName(q), [q])


  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`?q=${searchText}`)
  }


  return (
    <>
      <h1 className="mt-5">Buscar Héroe</h1> 
      <hr />

      <div className="row">
        <div className="col-5">

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="search" className="form-label">Buscar</label>
              <input type="text" className="form-control" name='searchText' placeholder="Buscar un héroe..." autoComplete="off" onChange={handleInputChange} value={searchText} />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultados</h4>
          <hr />

          {
            q === ''
            ? <div className='alert alert-info'>Buscar un héroe</div>
            : heroesFiltered.length === 0 && <div className='alert alert-danger'>No se encontraron resultador para: {q}</div>

          }

          {
            heroesFiltered.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default SearchScreen
