import { Component } from '@angular/core';
import { LoginDatos } from '../../interfaces/login-datos';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'login',
  standalone: true,

  imports: [
    FormsModule,
    ReactiveFormsModule
  ],

  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  showingRegisterForm: Boolean = false

  usuario:LoginDatos = {
    usuario: "",
    contrasena: ""
  }
  login() {
    if(this.usuario.usuario == "admin" && this.usuario.contrasena == "admin"){

    }

    // Hago que el formulario se limpie
    this.usuario.usuario = ""
    this.usuario.contrasena = ""
  }
  registro(){

  }

  toggleForm() {
    // Esto hace que este dando vueltas a la variable en cada uso
    this.showingRegisterForm = !this.showingRegisterForm
  }
}
