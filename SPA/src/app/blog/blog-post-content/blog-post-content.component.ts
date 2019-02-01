import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'anon-blog-post-content',
  templateUrl: './blog-post-content.component.html',
  styleUrls: ['./blog-post-content.component.scss']
})
export class BlogPostContentComponent implements OnInit {

  @Input() content: string;

  constructor() { }

  ngOnInit() {
  }

}
