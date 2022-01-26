import DashboardRoutes from '../../routers/DashboardRoutes'
import { AuthContext } from '../../auth/authContext'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

describe('Pruebas en <DashBoardRoutes />', () => {
  const contextValue = {
    user: {
      logged: true,
      name: 'Juanito',
    },
  }

  test('debe de mostrarse correctamente', () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('.text-info').text().trim()).toBe('Juanito')
    expect(wrapper.find('h1').text().trim()).toBe('Marvel Screen')
  })

  test('debe de mostrarse correctamente de DC', () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/dc']}>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('h1').text().trim()).toBe('Dc Screen')
  })
})
