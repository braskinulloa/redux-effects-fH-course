import { ActionReducerMap } from "@ngrx/store";
import { usuariosReducer, UsuariosState } from "./reducers";
import { usuarioReducer, UsuarioState } from "./reducers/usuario.reducer";

export interface AppState {
    usuarios: UsuariosState,
    usuarioSeleccionado: UsuarioState
}

export const appReducers: ActionReducerMap<AppState> = {
    usuarios: usuariosReducer,
    usuarioSeleccionado: usuarioReducer
}