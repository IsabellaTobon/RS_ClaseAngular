import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    title: "Home",
    loadComponent: ()=> import("./layouts/home/home.component").then(m => m.HomeComponent),
    children: [
      {
        path: "posts",
        title: "POSTS",
        loadComponent: ()=> import("./components/post/post.component").then(m => m.PostComponent)
      }
    ]
  }
];
