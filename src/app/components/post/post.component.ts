import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})

export class PostComponent implements OnInit {
  showingPostForm: boolean = false;

  @Output() cerrarFormulario: EventEmitter<void> = new EventEmitter<void>();

  constructor (
    private formBuilder: FormBuilder,
    private router: Router,
    // private service: PostService
  ) {}

  // posts: Array<Post> = []

  ngOnInit(): void {

      // this.service.inicio()

      // this.posts = this.service.posts


    this.formularioPost = this.formBuilder.group({
      titulo: ['',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(20),
        ],
      ],
      urlImagen: ['',
      [
        Validators.required,
        Validators.minLength(20)
      ]
      ],
    });
  }
  formularioPost: FormGroup = new FormGroup({
    usuario: new FormControl(''),
    contraseña: new FormControl(''),
  });

  mostrarSubirPost() {
    this.showingPostForm = !this.showingPostForm;
  }

  subirPost() {
    const titulo = this.formularioPost.get('titulo')?.value;
    const urlImagen = this.formularioPost.get('urlImagen')?.value;
  }

  cerrarForm() {
    // Lo llamamos desde el padre que es top-bar
    this.cerrarFormulario.emit();
  }
}
