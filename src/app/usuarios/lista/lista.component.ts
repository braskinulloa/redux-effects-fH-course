import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { pluck, tap } from 'rxjs/operators';
import { cargarUsuarios } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = [];
  loading: boolean = false;
  error: any;

  constructor( public store: Store<AppState> ) { }

  ngOnInit() {
    this.store.dispatch(cargarUsuarios());
    this.store.select('usuarios').subscribe(({usuarios, loading, error }) => {
        this.usuarios = usuarios;
        this.loading = loading;
        this.error = error
    });
  }

}
