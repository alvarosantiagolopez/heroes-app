import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";

describe('pruebas en authReducer', () => {

    const inicialState = {
        logged: false
    }

    test('debe de retornar el estado por defecto', () => {

        const state = authReducer(inicialState, {})
        expect(state).toEqual(inicialState);

    });

    test('debe de (login) llamar el login autenticar y establecer el user', () => {

        const action = {
            type: types.login,
            payload: {
                id: 'ABC',
                name: "Alvaro"
            }
        }

        const newState = authReducer(inicialState, action)

        expect(newState).toEqual({
            logged: true,
            user: action.payload
        });
    });


    test('debe de (logout) borrar el name del usuario y logged en false', () => {

        const action = {
            type: types.logout
        }

        const newState = authReducer(inicialState, action)

        expect(newState.logged).toBeFalsy();

    });

});

