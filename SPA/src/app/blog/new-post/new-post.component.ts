import {Component, Input, OnInit} from '@angular/core';
import { Router} from '@angular/router';
import { Location } from '@angular/common';
import { Post } from '../posts';
import {BlogService} from "../blog.service";

@Component({
  selector: 'anon-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

   @Input() title: string;
   post = {
     title: 'Enter Blog Post Title here..',
     image: 'https://picsum.photos/2000/1000?random',
     content: 'Enter Blog Post Content here..',
   };

  constructor(
      private location: Location,
      private blog_api: BlogService,
      private router: Router,
  ) { }

  ngOnInit() {

  }

  createPost(title, content) {
    this.post.content = content.model.editorData;
    this.post.title = title.model.editorData;
    this.post.image = 'https://picsum.photos/2000/1000?random';
    // console.log( this.post );
    this.blog_api.createPost(this.post).subscribe();
    console.log('Blog Post created successfully');
    this.router.navigate(['blog']);
  }


  goBack() {
      this.location.back();
  }

}
