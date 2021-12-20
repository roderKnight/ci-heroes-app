import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe('Test on authReducer', () => {

    test('should return the default state', () => {
       const state = authReducer({ logged: false}, {});
       expect( state ).toEqual({ logged: false });
    });
    
    test('should authenticate and gives a username', () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Rodrigo'
            }
        }
        const state = authReducer({ logged: false}, action);
        expect( state ).toEqual({ logged: true, name: 'Rodrigo'});
    });
    
    test('should log out and delete the user info', () => {
       const action = {
           type: types.logout
       } 
       const state = authReducer({ logged: true, name: 'Rodrigo' }, action);
       expect( state ).toEqual({ logged: false });
    });
    
});