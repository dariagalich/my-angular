import {Component, ContentChild, ElementRef, Input} from '@angular/core';
import {Post} from "../../component-detail/component-detail.component";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

  @Input() myPost!: Post
  @ContentChild('info', {static: true}) infoRef!: ElementRef

  ngOnInit(){
    console.log(this.infoRef.nativeElement)
  }

}
