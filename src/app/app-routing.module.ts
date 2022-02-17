import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { PanelComponent } from './components/panel/panel.component';


const routes: Routes = [
      {
        path: '',
        component: UsuariosComponent
      },
      {
        path: 'registrar',
        component: RegistroComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'panel',
        component: PanelComponent
      }
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
