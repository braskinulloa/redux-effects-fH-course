import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { pluck, take } from 'rxjs/operators';
import { Usuario } from 'src/app/models/usuario.model';
import { cargarUsuario } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  usuario: Usuario;
  loading: boolean = false;
  error: any;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.pipe(pluck('id')).subscribe( id => {
      console.log('ID ', id);
      this.store.dispatch(cargarUsuario({id}))
      this.store.select('usuarioSeleccionado').pipe(pluck('usuario')).subscribe( (usuario: Usuario) => {
        console.log(usuario);
        this.usuario = usuario;
      });    
    });
  }

}
