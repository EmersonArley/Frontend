import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor(private HttpClient : HttpClient, private router : Router) { }

  ngOnInit(): void {

   let httpHeaders: HttpHeaders = new HttpHeaders();
   const token = sessionStorage.getItem('token');
   console.log('get token', token);
   httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + token);

    this.HttpClient.post(`http://localhost:3050/post`, {}, { headers: httpHeaders })
   .subscribe(res => {
     if (res) {
        
      } else {
        alert(`Debes iniciar sesión`);
        this.router.navigate(['']);
      }
   });
  }

  cerrar(){
    this.router.navigate(['']);
    sessionStorage.setItem('token', "");
    alert("Se cerro la sesion correctamente");
  }

}
