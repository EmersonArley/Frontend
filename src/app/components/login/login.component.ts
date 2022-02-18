import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Usuario } from 'src/app/interfaces/usuario.interface';
import { UsuariosServicesService } from 'src/app/services/usuarios-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform : FormGroup
  constructor(private activeModal: NgbActiveModal, private fb : FormBuilder, private usuarioService : UsuariosServicesService, private router : Router) { }

  ngOnInit(): void {
    this.loginform = this.fb.group({
      nombreUsuario : [""],
      contrasena :[""]
    });
  }

  CloseModal(){
    this.activeModal.close();
  }



  validarLogin(){

    if(this.loginform.value.nombreUsuario == "" || this.loginform.value.contrasena== ""){
       alert("Los campos no pueden estar vacios")
     } else {
      var usuario : Usuario = {id_Usuario : null, nombreUsuario : this.loginform.value.nombreUsuario, contrasena : this.loginform.value.contrasena};
      this.usuarioService.validarLogin(usuario).subscribe(res => {

      if (res) {
        alert("Iniciando")
        this.router.navigate(['panel']);
      } else  {
        alert("Usuario invalido o no registrado");  
      }
      this.CloseModal();


    });
  }
}

}