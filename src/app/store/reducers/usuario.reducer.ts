import { Action, createReducer, on } from "@ngrx/store";
import { Usuario } from "src/app/models/usuario.model";
import { cargarUsuario, cargarUsuarioError, cargarUsuarioSuccess } from "../actions";

export interface UsuarioState {
    id: number,
    usuario: Usuario,
    loaded: boolean,
    loading: boolean,
    error: any
}

export const initialState: UsuarioState = {
    id: null,
    usuario: null,
    loaded: false,
    loading: false,
    error: null
}

const _usuarioReducer = createReducer(
    initialState,
    on(cargarUsuario, (state, {id}) => ({ ...state, loading: true, id })),
    on(cargarUsuarioSuccess, (state, { usuario }) => ({ ...state, loading: false, loaded: true , usuario: {...usuario} })),
    on(cargarUsuarioError, (state, { payload }) => ({ ...state, loading: false, loaded: true , error: { url: payload.url, message: payload.message, name: payload.name } })),
);

export function usuarioReducer(state: UsuarioState | undefined, action: Action) {
    return _usuarioReducer(state, action);
}