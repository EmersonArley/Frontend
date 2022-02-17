import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { UsuariosServicesService } from 'src/app/services/usuarios-services.service';

@Component({
  selector: 'app-borrar',
  templateUrl: './borrar.component.html',
  styleUrls: ['./borrar.component.css']
})
export class BorrarComponent implements OnInit {
  @Input() usuario : Usuario;
  usuarioform : FormGroup;
  constructor( private activeModal : NgbActiveModal, private fb : FormBuilder, private usuarioService : UsuariosServicesService ) { }

  ngOnInit(): void {
    this.usuarioform = this.fb.group({
      nombreUsuario :[this.usuario.nombreUsuario],
      contrasena : [this.usuario.contrasena]
    })
  }

  closeModal(){
    this.activeModal.close();
  }

  borrarUsuario(){
    var usuario : Usuario = {id_Usuario: this.usuario.id_Usuario, nombreUsuario: this.usuarioform.value.nombreUsuario, contrasena : this.usuarioform.value.contrasena};
    this.usuarioService.borrarUsuario(usuario).subscribe(res => {

      if (res) {
        alert("Usuario eliminado correctamente")
      } else {
        alert("Error al eliminar")
      }

      window.location.reload();
      
    })
  }

}
