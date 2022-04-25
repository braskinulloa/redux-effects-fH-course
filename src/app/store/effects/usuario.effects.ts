import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap, tap } from "rxjs/operators";
import { Usuario } from "src/app/models/usuario.model";
import { UsuarioService } from "src/app/services/usuario.service";
import * as usuarioActions from "../actions";

@Injectable()
export class UsuarioEffects {
    
    constructor(private actions$: Actions, private usuariosService: UsuarioService ) {}
    
    cargarUsuario$ = createEffect( () => this.actions$.pipe(
        ofType(usuarioActions.cargarUsuario),
        mergeMap( (action) => this.usuariosService.getUser(action.id).pipe(
            map( (usuario: Usuario) => usuarioActions.cargarUsuarioSuccess({ usuario }) ),
            catchError( err => of(usuarioActions.cargarUsuarioError({ payload: err })) )
        ))
    )); 
}