import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginDatos } from '../../interfaces/login-datos';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RegistroData } from '../../interfaces/registro-data';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  standalone: true,

  imports: [FormsModule, ReactiveFormsModule],

  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  showingRegisterForm: boolean = false;

  @Output() usuarioLogueado: EventEmitter<void> = new EventEmitter<void>();

  //Creamos la variable y Si quiero que se llame hacia afuera pondre Output
  @Output() cerrarFormulario: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formularioLogin = this.formBuilder.group({
      usuario: ['',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(11),
        ],
      ],
      contraseña: ['',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(14),
        ],
      ],
    });

    this.formularioRegistro = this.formBuilder.group({
      usuario: ['',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(11),
        ],
      ],

      email: ['',
        [
          Validators.required,
          Validators.email
        ]
      ],

      contraseña: ['',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(14),
        ],
      ],

      confirmarContraseña: ['',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(14),
        ],
      ],

      telefono: ['',
        [
          Validators.required,
          Validators.minLength(9),
          Validators.maxLength(11),
        ],
      ],
    });
  }

  // Creamos el formulario en el ts y le especificamos el tipo : FormGroup
  formularioLogin: FormGroup = new FormGroup({
    usuario: new FormControl(''),
    contraseña: new FormControl(''),
  });

  formularioRegistro: FormGroup = new FormGroup({
    usuario: new FormControl(''),
    contraseña: new FormControl(''),
    confirmarContraseña: new FormControl(''),
  });

  // Al crear el formulario en el ts esto queda obsoleto
  // usuario:LoginDatos = {
  //   usuario: "",
  //   contrasena: ""
  // }

  // registerData:RegistroData = {
  //   username:"",
  //   password:"",
  //   confirmPassword:""
  // }

  login() {
    const nombreUsuario = this.formularioLogin.get('usuario')?.value;
    const contraseña = this.formularioLogin.get('contraseña')?.value;

    if (nombreUsuario == 'admin' && contraseña == 'admin') {
      this.usuarioLogueado.emit();

      this.router.navigate(['/posts']);
    }

    // Primero obtenemos la referencia con el get y lo actualizamos con el set
    this.formularioLogin.get('usuario')?.setValue('');
    this.formularioLogin.get('contraseña')?.setValue('');
  }
  registro() {
    const nombreUsuario = this.formularioLogin.get('usuario')?.value;
    const email = this.formularioLogin.get('email')?.value;
    const contraseña = this.formularioLogin.get('contraseña')?.value;
    const confirmarContraseña = this.formularioLogin.get('confirmarContraseña')?.value;
    const telefono = this.formularioLogin.get('telefono')?.value;

    if (contraseña != confirmarContraseña) {
      alert('Las contraseñas no coinciden');
    } else {
      // Primero obtenemos la referencia con el get y lo actualizamos con el set
      this.formularioLogin.get('usuario')?.setValue(nombreUsuario);
      this.formularioRegistro.get('email')?.setValue(email);
      this.formularioLogin.get('contraseña')?.setValue(contraseña);
      this.formularioRegistro.get('telefono')?.setValue(telefono);

      this.login();

      console.log('Se ha registrado correctamente');
    }

    // Primero obtenemos la referencia con el get y lo actualizamos con el set
    this.formularioRegistro.get('usuario')?.setValue('');
    this.formularioRegistro.get('contraseña')?.setValue('');
    this.formularioRegistro.get('confirmarContraseña')?.setValue('');
  }

  toggleForm() {
    // Esto hace que este dando vueltas a la variable en cada uso
    this.showingRegisterForm = !this.showingRegisterForm;
  }

  cerrarForm() {
    // Lo llamamos desde el padre que es top-bar
    this.cerrarFormulario.emit();
  }


}
