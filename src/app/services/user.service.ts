import { Injectable, OnInit } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})

//Implementamos el OnInit para poder guardar los datos que queramos en el ordenador
export class UserService implements OnInit {
  constructor() {}

  //Información del usuario LOGUEADO
  userData: User = {
    username: '',
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    telefono: '',
  };

  ngOnInit(): void {
    // Cuando cargamos el componente por primera vez comprobamos si en el localStorage existe ese user
    // Y si esta lo parseamos en un JSON, en este obtenemos la variable de usuarios y actualizamos
    let usuarios = localStorage.getItem("users")

    if (usuarios != null) {
      const arrayUsers: Array<User> = JSON.parse(usuarios).usuariosJSON

      this.usuarios = arrayUsers
    }
  }

  //Simulo los usuarios
  usuarios: Array<User> = [
    {
      username: 'admin',
      nombre: 'admin',
      apellido: 'admin',
      email: 'admin',
      password: 'admin',
      telefono: 'admin'
    },

    {
      username: 'admin2',
      nombre: 'admin2',
      apellido: 'admin2',
      email: 'admin2',
      password: 'admin2',
      telefono: 'admin2',
    },

    {
      username: 'admin3',
      nombre: 'admin3',
      apellido: 'admin3',
      email: 'admin3',
      password: 'admin3',
      telefono: 'admin3',
    },
  ];

  //Comprobamos si el usuario/email y contraseña coinciden
  login(nombreUsuario: string, contraseña: string): Boolean {
    for (let i = 0; i < this.usuarios.length; i++) {
      if (
        nombreUsuario == this.usuarios[i].email ||
        nombreUsuario == this.usuarios[i].username
      ) {
        if (contraseña == this.usuarios[i].password) {
          return true;
        }
      }
    }

    this.userData = {
      username: '',
      nombre: '',
      apellido: '',
      email: '',
      password: '',
      telefono: ''
    };
    return false;
  }

  register(nombreUsuario: string, contraseña: string, confirmarContraseña: string) {
    if (contraseña != confirmarContraseña) {
      return false
    }

    let coinciden = false

  this.usuarios.forEach(usuario => {
    if(usuario.username == nombreUsuario) {
      coinciden = true
    }
  });

  if (coinciden) {
    return false
  }
  //Usamos una constante por que no se va a cambiar
  const nuevoUsuario: User = {
    username: nombreUsuario,
    nombre: "",
    apellido: "",
    email: "",
    password: contraseña,
    telefono: "",
  }

  this.usuarios.push(nuevoUsuario)

  //Nos creamos un objeto que luego lo pasamos a JSON
  const objetoUsuarios = {
    usuariosJSON: this.usuarios
  }
// Y lo ponemos en el localStorage
  localStorage.setItem("users", JSON.stringify(objetoUsuarios))

  return true
  }
}
