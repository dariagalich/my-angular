import {Component, Input} from '@angular/core';
import {Post} from "../../component-detail/component-detail.component";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

  @Input() myPost!: Post

}
