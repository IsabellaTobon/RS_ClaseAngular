import { Injectable, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  inicio(): void {
    const postsArray = localStorage.getItem("posts")

    if(postsArray != null){
      const arrayPosts: Array<Post> = JSON.parse(postsArray).posts

      this.posts = arrayPosts

      console.log(this.posts)
    }
  }

  posts: Array<Post> = []

  crearPost(post: Post){
    this.posts.push(post)

    const postASubir = {
      posts: this.posts
    }

    localStorage.setItem("posts", JSON.stringify(postASubir))
  }
}
