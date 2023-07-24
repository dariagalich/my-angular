import { Component } from '@angular/core';

export interface Post { //создадим интерфейс
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-component-detail',
  templateUrl: './component-detail.component.html',
  styleUrls: ['./component-detail.component.scss']
})
export class ComponentDetailComponent {
  title = 'my-angular';

  posts: Post[] = [ //описываем массив постов
    {title: 'Заголовок 1', text: "Текст 1", id: 1},
    {title: 'Заголовок 2', text: "Текст 2", id: 2}
  ]
}
