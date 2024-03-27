import { Component } from '@angular/core';
import { LoginComponent } from "../login/login.component";
import { RegistroNuevoUsuarioComponent } from "../registro-nuevo-usuario/registro-nuevo-usuario.component";

@Component({
    selector: 'topbar',
    standalone: true,
    templateUrl: './top-bar.component.html',
    styleUrl: './top-bar.component.css',
    imports: [LoginComponent, RegistroNuevoUsuarioComponent]
})
export class TopBarComponent {
  textoDeBotonRegistro:string = "Registrarse"
  textoDeBoton:string = "Iniciar sesión"

  formularioRegistroAbierto:boolean = false

  registrarse() {
    this.formularioRegistroAbierto = !this.formularioRegistroAbierto
  }


  formularioabierto:boolean = false

  cambiarFormulario() {
    this.formularioabierto = !this.formularioabierto
  }

}
