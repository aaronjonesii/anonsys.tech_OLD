import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'anon-blog-post-card',
  templateUrl: './blog-post-card.component.html',
  styleUrls: ['./blog-post-card.component.scss']
})
export class BlogPostCardComponent implements OnInit {
  @Input() posts$: any;
  constructor() { }

  ngOnInit() {
  }

}
