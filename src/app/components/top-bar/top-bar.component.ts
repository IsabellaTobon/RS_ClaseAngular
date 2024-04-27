import { Component } from '@angular/core';
import { LoginComponent } from "../login/login.component";
import { RouterLink } from '@angular/router';
import { PostComponent } from '../post/post.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'topbar',
  standalone: true,
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css',
  imports: [LoginComponent, PostComponent, RouterLink]
})

export class TopBarComponent {

constructor (
  private service: UserService
){}

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

    // Con esto haré que mi botón de iniciar sesión cambie a
    // poner Cerrar Sesión y que ponga el nombre del suario logueado
    if (seHaLogueado) {
      this.textoDeBoton = "Cerrar Sesión " + this.service.userData.username
    }
  }

  FormularioPostAbierto : boolean = true

}
