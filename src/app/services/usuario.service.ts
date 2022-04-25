import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = 'https://reqres.in/api';

  constructor( private http: HttpClient ) { }


  getUsers(): Observable<Usuario[]> {
    return this.http.get(`${ this.url }/users?per_page=6&delay=3`)
          .pipe(
            map( resp => resp['data'])
          );
  }
  getUser(id: number): Observable<Usuario> {
    return this.http.get(`${ this.url }/users/${id}`)
    .pipe(
      map( resp => resp['data'])
    );
  }
}
