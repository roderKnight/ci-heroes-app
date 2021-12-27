import { mount } from "enzyme";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Hero } from "../../../components/hero/Hero";

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}));

describe('tests on <Hero />', () => {
   
    test('should not render the Hero component', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <Routes>
                    <Route path="/hero" element={ <Hero /> }/>
                    <Route path="*" element={ <h1>No Hero Page</h1> } />
                </Routes>
            </MemoryRouter>
        );

        console.log(wrapper.html());
        expect( wrapper.find('h1').text().trim() ).toBe('No Hero Page');
    });

    test('should render the Hero component with the hero card', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Routes>
                    <Route path="/hero/:id" element={ <Hero /> }/>
                    <Route path="/" element={ <h1>No Hero Page</h1> } />
                </Routes>
            </MemoryRouter>
        );

        console.log(wrapper.html());
        expect( wrapper.find('.row').exists() ).toBe(true);
    });

    test('should back to the previous screen', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Routes>
                    <Route path="/hero/:id" element={ <Hero /> }/>
                </Routes>
            </MemoryRouter>
        );
        
        wrapper.find('button').prop('onClick')();
        expect( mockNavigate ).toHaveBeenCalledWith(-1);
    });
    
    test('should not render the Hero component when a hero does not exist', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/paul-mccartney']}>
                <Routes>
                    <Route path="/hero" element={ <Hero /> }/>
                    <Route path="*" element={ <h1>No Hero Page</h1> } />
                </Routes>
            </MemoryRouter>
        );

        expect( wrapper.find('h1').text().trim() ).toBe('No Hero Page');
    });
});
