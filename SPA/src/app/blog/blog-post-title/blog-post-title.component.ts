import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'anon-blog-post-title',
  templateUrl: './blog-post-title.component.html',
  styleUrls: ['./blog-post-title.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class BlogPostTitleComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
