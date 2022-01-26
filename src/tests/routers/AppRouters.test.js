import { AuthContext } from "../../auth/authContext";
import {mount} from 'enzyme'
import AppRouters from "../../routers/AppRouters";


describe('Pruebas en <AppRouter />', () => {

  test('debe de mostrar el login si no está autenticado', () => {
    
    const contextValue = {
      user: {
        logged: false
      }
    }

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouters />
      </AuthContext.Provider>
    )
    
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('h1').text().trim()).toBe('Login')

  });

  test('debe de mostrar el componente de Marvel si está autenticado', () => {
    
    const contextValue = {
      user: {
        logged: true,
        name: 'Juancho'
      }
    }

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouters/>
      </AuthContext.Provider>
    )

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('.navbar').exists()).toBeTruthy()

  });
  
  

})