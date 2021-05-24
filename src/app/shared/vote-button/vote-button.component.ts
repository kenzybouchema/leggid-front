import { Component, OnInit, Input } from '@angular/core';

import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import {PostModel} from '../../auth/shared/post-model';

@Component({
  selector: 'app-vote-button',
  templateUrl: './vote-button.component.html',
  styleUrls: ['./vote-button.component.css']
})
export class VoteButtonComponent implements OnInit {

  @Input() post: PostModel;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;

  constructor() {
  }

  ngOnInit() {

  }

}
