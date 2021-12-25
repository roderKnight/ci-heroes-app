import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { DashboardRoutes } from "../../routers/DashboardRoutes";

describe('test on <DashboardRoutes />', () => {
   
    const contextValue = {
        user: {
            lagged: true,
            name: 'James'
        }
    };

    test('should be renderized correctly and show all heroes', () => {
       
      const wrapper = mount(
          <AuthContext.Provider value={ contextValue }>
              <MemoryRouter initialEntries={['/']}> {/* here is where we can change the url */}
                <DashboardRoutes />
              </MemoryRouter>
          </AuthContext.Provider>
      );
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find('h1').text().trim()).toBe('All Heroes');
    });
    
});
