import {Component, ContentChild, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Post} from "../../component-detail/component-detail.component";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy{

  @Input() myPost!: Post
  @ContentChild('info', {static: true}) infoRef!: ElementRef
  @Output() onRemove = new EventEmitter<number>()

  removePost(){
    this.onRemove.emit(this.myPost.id)
  }

  ngOnInit(){

  }

  ngOnDestroy() {

  }


}
