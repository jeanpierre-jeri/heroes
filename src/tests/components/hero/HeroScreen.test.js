import { mount } from 'enzyme'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import HeroScreen from '../../../components/hero/HeroScreen'

const mockNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}))

describe('Pruebas en <HeroScreen />', () => {
  test('no debe de mostrar el <HeroScreen /> si no hay un heroe en el URL', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero']}>
        <Routes>
          <Route path="/hero" element={<HeroScreen />} />
          <Route path="/" element={<h1>No hero page</h1>} />
        </Routes>
      </MemoryRouter>
    )

    expect(wrapper.find('h1').text().trim()).toBe('No hero page')
  })

  test('debe de mostrar un heroe si el parámetro existe y se encuentra', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Routes>
          <Route path="/hero/:heroid" element={<HeroScreen />} />
          <Route path="/" element={<h1>No hero page</h1>} />
        </Routes>
      </MemoryRouter>
    )
    expect(wrapper.find('.row').exists()).toBeTruthy()
  })

  test('debe de regresar a la pantalla anterior', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Routes>
          <Route path="/hero/:heroid" element={<HeroScreen />} />
        </Routes>
      </MemoryRouter>
    )

    wrapper.find('button').prop('onClick')()
    expect(mockNavigate).toHaveBeenCalledWith('/marvel')
  })
})
