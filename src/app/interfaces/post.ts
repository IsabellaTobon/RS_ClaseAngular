import { User } from "./user";

export interface Post {
  id: string,
  img: string,
  comentarios: Array<string>,
  // Lo correcto seria hacer un array de id's de usuario entonces seria Array<id> pero no lo hemos puesto en las propiedades de usuario
  likes: Array<User>,
  fecha: Date,
  autor: User
}
