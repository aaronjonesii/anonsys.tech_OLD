import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import { map, switchMap, startWith } from 'rxjs/operators';
import { BlogService } from './blog.service';
import {interval, Observable} from 'rxjs';
import { Posts } from './posts';
import { NbDialogService } from '@nebular/theme';
import {NewPostComponent} from "./new-post/new-post.component";

declare var eva: any;

@Component({
  selector: 'anon-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class BlogComponent implements OnInit {
  count: 0;
  posts = [{title: 'Loading Blog Posts...'}];
  posts$: Observable<any>;
  next_page: string;
  prev_page: string;
  blur_content = false;

  constructor(
      private blog_api: BlogService,
      private dialogService: NbDialogService,
  ) {
  }
// https://www.apple.com/newsroom/
//


  ngOnInit(): void {
    // WORKING
    this.posts$ = this.blog_api.getPosts().pipe( map(data => data.results) );

    //  Render Eva icons
    setTimeout(() => eva.replace(), 500);
  }

  getPosts = () => {
    this.blog_api.getPosts().subscribe(
      data => {
        // console.log(data);
        this.count = data.count;
        this.next_page = data.next;
        this.prev_page = data.previous;
        this.posts = data.results;
      }, error => {
        console.log(error);
      }
    );
  }

  trackByFn(index, item) {
    // console.log(item);
     return index;
  }


  newPost() {
    // TODO: Blur Background on open
    this.blur_content = true;
    this.dialogService.open(NewPostComponent, {
      context: {
        title: 'Create New Blog Post:',
      },
      closeOnBackdropClick: false,
      closeOnEsc: false,
    }).onClose.subscribe(() => this.blur_content = false);
  }


}
