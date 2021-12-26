import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../../auth/authContext";
import { LoginScreen } from "../../../components/login/LoginScreen";
import { types } from "../../../types/types";

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}));

describe('tests on <LoginScreen />', () => {

    const contextValue = {
        dispatch: jest.fn(),
        payload: {
            logged: false
        }
    };
    
    const wrapper = mount( 
        <AuthContext.Provider value={ contextValue }>
            <MemoryRouter initialEntries={['']} value={{contextValue}}>
                <LoginScreen />
            </MemoryRouter>
        </AuthContext.Provider>
    );

    test('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should call the dispatch and navigate functions', () => {

        const handleClick = wrapper.find('button').prop('onClick');
        handleClick();

        expect( contextValue.dispatch ).toHaveBeenCalledWith({payload:{ name: 'Rodrigo' },'type': types.login});
        expect( mockNavigate ).toHaveBeenCalledWith('/dc', {replace: true}); //taking '/dc' as default

        localStorage.setItem('lastPath', '/marvel'); // puting '/marvel' as the last view
        handleClick();
        expect( mockNavigate ).toHaveBeenCalledWith('/marvel', {replace: true});
    });
    
    
});
