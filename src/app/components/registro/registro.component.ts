import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  constructor(private activeModal : NgbActiveModal, private fb : FormBuilder, private usuarioServices: UsuariosServicesService) {
    this.usuarioForm= this.fb.group({
      nombreUsuario :['',Validators.required],
      contrasena: ['',[Validators.required,  Validators.minLength(8)]]
    });
  }

  ngOnInit(): void {
    
    
  }



  CloseModal(){
    this.activeModal.close();
  }

  registrarUsuario(){

    if (this.usuarioForm.value.nombreUsuario== "" || this.usuarioForm.value.contrasena == ""){
        alert("No puede a ver ningun campo vacio")
    } else{
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
  

}

