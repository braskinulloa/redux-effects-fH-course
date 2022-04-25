import { Action, createReducer, on } from "@ngrx/store";
import { Usuario } from "src/app/models/usuario.model";
import { cargarUsuarios, cargarUsuariosError, cargarUsuariosSuccess } from "../actions";

export interface UsuariosState {
    usuarios: Usuario[],
    loaded: boolean,
    loading: boolean,
    error: any
}

export const initialState: UsuariosState = {
    usuarios: [],
    loaded: false,
    loading: false,
    error: null
}

const _usuariosReducer = createReducer(
    initialState,
    on(cargarUsuarios, state => ({ ...state, loading: true })),
    on(cargarUsuariosSuccess, (state, { usuarios }) => ({ ...state, loading: false, loaded: true , usuarios: [ ...usuarios ] })),
    on(cargarUsuariosError, (state, { payload }) => ({ ...state, loading: false, loaded: true , error: { url: payload.url, message: payload.message, name: payload.name } })),
);

export function usuariosReducer(state: UsuariosState | undefined, action: Action) {
    return _usuariosReducer(state, action);
}