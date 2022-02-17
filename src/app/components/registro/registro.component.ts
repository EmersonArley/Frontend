import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { UsuariosServicesService } from 'src/app/services/usuarios-services.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  usuarioForm: FormGroup;
  constructor(private activeModal : NgbActiveModal, private fb : FormBuilder, private usuarioServices: UsuariosServicesService) { }

  ngOnInit(): void {
    this.usuarioForm= this.fb.group({
      nombreUsuario :[""],
      contrasena: [""]
    });
    
  }

  CloseModal(){
    this.activeModal.close();
  }

  registrarUsuario(){
    var usuario : Usuario = { id_Usuario : null,  nombreUsuario : this.usuarioForm.value.nombreUsuario, contrasena : this.usuarioForm.value.contrasena};
    this.usuarioServices.registrarUsuario(usuario).subscribe(res =>{

      if(res == true || res==false){
        alert("Usuario registrado exitosamente");
      }
      
      this.CloseModal();
     window.location.reload();
    });
  }
  

}

