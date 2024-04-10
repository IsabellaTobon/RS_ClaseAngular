import { Component, EventEmitter, Output } from '@angular/core';
import { LoginDatos } from '../../interfaces/login-datos';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistroData } from '../../interfaces/registro-data';

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


  @Output() usuarioLogueado: EventEmitter<void> = new EventEmitter<void>();
  // @Output() usuarioRegistrado: EventEmitter<void> = new EventEmitter<void>();


  usuario:LoginDatos = {
    usuario: "",
    contrasena: ""
  }

  registerData:RegistroData = {
    username:"",
    password:"",
    confirmPassword:""
  }

  login() {
    if(this.usuario.usuario == "admin" && this.usuario.contrasena == "admin"){
      this.usuarioLogueado.emit();
    }

    // Hago que el formulario se limpie
    this.usuario.usuario = ""
    this.usuario.contrasena = ""
  }
  registro() {

    if(this.registerData.username == "" || this.registerData.password == "" || this.registerData.confirmPassword == ""){
      alert("Los campos no pueden estar vacios")
    }

    else if (this.registerData.password != this.registerData.confirmPassword) {
      alert("Las contraseñas no coinciden")
    }

    else{
      this.usuario.usuario = this.registerData.username
      this.usuario.contrasena = this.registerData.password

      this.login()

      console.log("Se ha registrado correctamente")
    }

    this.registerData.username = ""
    this.registerData.password = ""
    this.registerData.confirmPassword = ""

  }

  toggleForm() {
    // Esto hace que este dando vueltas a la variable en cada uso
    this.showingRegisterForm = true
  }

  cerrarFormInicio() {
    //Ocultar formulario
    this.showingRegisterForm = false
  }

}
