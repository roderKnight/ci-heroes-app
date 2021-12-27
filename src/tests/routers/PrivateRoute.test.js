import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { PrivateRoute } from './../../routers/PrivateRoute';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    Navigate: () => <span>Redirecting</span>
}));

describe('tests on <PrivateRoute />', () => {

    Storage.prototype.setItem = jest.fn();
   
    test('should render the component if is authenticated and save on localStorage', () => {
       
        const contextValue = {
            user: {
                logged: true,
                name: 'Pepe'
            }
        };

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/']}>
                    <PrivateRoute>
                        <h1>Private component</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        // console.log(wrapper.html());
        expect(wrapper.text().trim()).toBe('Private component');
        expect(Storage.prototype.setItem).toHaveBeenCalledWith('lastPath', '/');
    });
    
    test('should not render the component if the user isnt authenticated', () => {
       
        const contextValue = {
            user: {
                logged: false
            }
        };

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/']}>
                    <PrivateRoute>
                        <h1>Private component</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        // console.log(wrapper.html());
        expect(wrapper.find('span').text().trim()).toBe('Redirecting');
    });
    


});
