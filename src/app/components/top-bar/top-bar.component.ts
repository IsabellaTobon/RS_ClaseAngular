import { Component } from '@angular/core';
import { LoginComponent } from "../login/login.component";
import { RouterLink } from '@angular/router';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'topbar',
  standalone: true,
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css',
  imports: [LoginComponent, PostComponent, RouterLink]
})

export class TopBarComponent {
  textoDeBotonRegistro:string = "Registrarse"
  textoDeBoton:string = "Iniciar sesión"

  formularioRegistroAbierto:boolean = false

  registrarse() {
    this.formularioRegistroAbierto = !this.formularioRegistroAbierto
    this.formularioabierto = false;
  }


  formularioabierto:boolean = false

  cambiarFormulario(seHaLogueado:boolean = false) {
    this.textoDeBoton = "Iniciar Sesión"

    this.formularioabierto = !this.formularioabierto
    // Con esto haré que mi botón de iniciar sesión cambie a poner Cerrar Sesión
    if (seHaLogueado) {
      this.textoDeBoton = "Cerrar Sesión"
    }
  }

  FormularioPostAbierto : boolean = true

}
