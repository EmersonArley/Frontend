import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { UsuariosServicesService } from 'src/app/services/usuarios-services.service';
import { BorrarComponent } from '../borrar/borrar.component';
import { EditarComponent } from '../editar/editar.component';
import { LoginComponent } from '../login/login.component';
import { RegistroComponent } from '../registro/registro.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[];
  constructor(private usuariosService: UsuariosServicesService, private modalService : NgbModal) { }

  ngOnInit(): void {
    this.usuariosService.obtenerUsuarios().subscribe(usuarios=>{
      this.usuarios = usuarios;
      console.log(usuarios);
    });
  }

  openModalLogin(){
    var modal = this.modalService.open(LoginComponent, {
      keyboard : false,
      backdrop : "static",
      size : "lg"

    });
  }

  openModalRegistro (){
    var modal= this.modalService.open(RegistroComponent, {
      keyboard : false,
      backdrop : "static",
      size : "lg"

    });
  }

  openModalEditar (usuario: Usuario){
    var modal= this.modalService.open(EditarComponent, {
      keyboard : false,
      backdrop : "static",
      size : "lg"

    });
    modal.componentInstance.usuario= usuario;
  }

  openModalBorrar (usuario: Usuario){
    var modal= this.modalService.open(BorrarComponent, {
      keyboard : false,
      backdrop : "static",
      size : "lg"

    });
    modal.componentInstance.usuario= usuario;
  }


}
