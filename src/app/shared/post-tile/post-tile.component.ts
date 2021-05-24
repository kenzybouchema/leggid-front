import {Component, Input, OnInit} from '@angular/core';
import {PostModel} from '../../auth/shared/post-model';

// @fortawesome/angular-fontawesome	Angular	ng-add
// 0.1.x	5.x	not supported
// 0.2.x	6.x	not supported
// 0.3.x	6.x && 7.x	not supported
// 0.4.x, 0.5.x	8.x	not supported
// 0.6.x	9.x	supported
// 0.7.x	10.x	supported
// 0.8.x	11.x	supported
// ng add @fortawesome/angular-fontawesome@0.8
// Free Solid Icons, Free Regular Icons, Free Brands Icons
import { faComments } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post-tile',
  templateUrl: './post-tile.component.html',
  styleUrls: ['./post-tile.component.css']
})
export class PostTileComponent implements OnInit {

  @Input() data: Array<PostModel>;
  faComments = faComments;

  constructor() { }

  ngOnInit(): void {
  }

}
