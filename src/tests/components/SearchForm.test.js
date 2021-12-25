import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { HeroList } from "../../components/hero/HeroList";
import { SearchForm } from "../../components/search/SearchForm";
import { Navbar } from '../../components/ui/Navbar';

describe('Tests on <SearchForm />', () => {
    
    test('should renderize with default components', () => {
        const wrapper = mount( 
            <MemoryRouter initialEntries={['/search']}>
                <SearchForm />
            </MemoryRouter>
        );
        expect(wrapper).toMatchSnapshot();
        expect( wrapper.find('.btn').text().trim()).toBe('Search');
    });
    
    test('should the Search component be renderized in the Navbar component', () => {
        const contextValue = {
            user: {
                logged: true,
                name: 'James'
            }
        };

        const wrapper = mount( 
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['?q=Spider%20Man']} value={{contextValue}}>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
        expect( wrapper.find('.btn-outline-primary').text().trim()).toBe('Search');
    });

    test('should show to Spider Man on the heroes list', () => {

        const contextValue = {
            user: {
                logged: true,
                name: 'James'
            }
        };

        const search = "Spider Man";

        const wrapper = mount( 
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['?q=Spider%20Man']} value={{contextValue}}>
                    <Navbar />
                    <HeroList publisher={""} isSearch={search}/>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        console.log(wrapper.html());

        expect( wrapper.find('.card-title').text().trim()).toBe(search);
    });
    
});
