import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosServicesService {

  constructor(private http: HttpClient) {
   }

   obtenerUsuarios() : Observable<Usuario[]> {
      return this.http.get<Usuario[]>('http://localhost:3050/usuarios');
   }

   editarUsuarios(usuario : Usuario) : Observable<any> {
      var formdata = new FormData();
      var objeto ={'nombreUsuario' : usuario.nombreUsuario,'contrasena' :usuario.contrasena };
      // formdata.append("nombreUsuario", usuario.nombreUsuario);
      // formdata.append("contrasena", usuario.contrasena);
    return this.http.put<any>(`http://localhost:3050/actualizar/${usuario.id_Usuario}`, objeto);
 }

  registrarUsuario(usuario : Usuario) : Observable<any> {
    var response;
    try {
      response= this.http.post<any>(`http://localhost:3050/registrar`, {'nombreUsuario': usuario.nombreUsuario, 'contrasena' : usuario.contrasena});
    } catch {
      
    }
    return response; 
    
  }

  validarLogin(usuario : Usuario): Observable<any>{
    var response;
    try {
      response = this.http.post<any>(`http://localhost:3050/login`, {'nombreUsuario': usuario.nombreUsuario, 'contrasena' : usuario.contrasena});
      
    } catch {
      
    }
      return response;
      
      
  }

  borrarUsuario(usuario : Usuario): Observable<any>{
    var response;
    try {
      response = this.http.delete<any>(`http://localhost:3050/borrar/${usuario.id_Usuario}`)
      
    } catch  {
      
    }
    return response;
  }




}

