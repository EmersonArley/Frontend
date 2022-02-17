import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { UsuariosServicesService } from 'src/app/services/usuarios-services.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
@Input() usuario: Usuario;
  usuarioForm: FormGroup;
  constructor(private activeModal: NgbActiveModal, private fb: FormBuilder, private usuariosServices:UsuariosServicesService) { }

  ngOnInit(): void {
    this.usuarioForm=this.fb.group({
      nombreUsuario: [this.usuario.nombreUsuario], 
      contrasena: [this.usuario.contrasena]
    });
  }

  closeModal(){
    this.activeModal.close();
    
  }

  editarUsuario(){
    var usuario : Usuario = {id_Usuario:this.usuario.id_Usuario, nombreUsuario: this.usuarioForm.value.nombreUsuario, contrasena: this.usuarioForm.value.contrasena};
    this.usuariosServices.editarUsuarios(usuario).subscribe(res => {

      if (res) {
        alert("Usuario Modificado exitosamente");
      } else {
        alert("Error al editar el usuario")
      }

      this.closeModal();
      window.location.reload();
      
      
    });

  }

}
