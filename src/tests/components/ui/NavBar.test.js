import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../../auth/authContext";
import { Navbar } from "../../../components/ui/Navbar";
import { types } from "../../../types/types";

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}));

describe('tests on <NavBar />', () => {
   
    test('should the NavBar component be renderized properly', () => {
        const contextValue = {
            user: {
                logged: true,
                name: 'Pedro'
            }
        };

        const wrapper = mount( 
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['']} value={{contextValue}}>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
        expect( wrapper.find('.text-info').text().trim()).toBe('Pedro');
    });


    test('should call to logout, call navigate and dispatch with their arguments', () => {
        const contextValue = {
            dispatch: jest.fn(), // mock of our dispatch
            user: {
                logged: true,
                name: 'Pedro'
            }
        };

        const wrapper = mount( 
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['']} value={{contextValue}}>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        wrapper.find({className: "nav-item nav-link btn"}).prop('onClick')();

        expect( mockNavigate ).toHaveBeenCalledWith('login', {replace: true});  
        expect( contextValue.dispatch ).toHaveBeenCalledWith({'type': types.logout});
        //expect( wrapper.find({className: "nav-item nav-link btn"}).text().trim()).toBe('Logout');
    });
    
    
});
