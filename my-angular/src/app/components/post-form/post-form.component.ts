import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Post} from "../../component-detail/component-detail.component";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent {

  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>()

  @ViewChild('titleInput',{static: false}) inputRef!: ElementRef

  title = ''
  text = ''

  addPost(){
    if (this.text.trim() && this.title.trim()){
      const post: Post = {
        title: this.title,
        text: this.text
      }
      this.onAdd.emit(post) // отправление данных
      console.log('New Post: ', post) //  вывод в консоль
      this.title = this.text = '' // очищение полей
    }
  }
  focusTitle(){
    console.log(this.inputRef)//позволяет посмотреть сожержимое объекта
    this.inputRef.nativeElement.focus()//ставит фокус
  }
}
