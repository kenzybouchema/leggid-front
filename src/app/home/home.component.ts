import { Component, OnInit } from '@angular/core';
import {faArrowDown, faArrowUp, faComments } from '@fortawesome/free-solid-svg-icons';
import {PostModel} from '../auth/shared/post-model';
import {PostService} from '../auth/shared/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: Array<PostModel> = [];
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  faComments = faComments;

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(post => {
      this.posts = post;
    })
  }

}
