import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss']
})
export class BasicsComponent {
  //интерполяция----------------
  title = 'Просто txt'
  number = 42
  arr = [1,2,3,4,5,6,]
  objInter = { a: 1, b: {c: 2}}

  //bindings----------------
  //1 way
  img = 'https://e7.pngegg.com/pngimages/607/886/png-clipart-color-wheel-switch-computer-icons-color-symmetry-computer-wallpaper.png'
  constructor() {
    setTimeout(()=>{ //поменяет картинку через 5 сек
      console.log('Timeout is over')
      this.img = 'https://e7.pngegg.com/pngimages/658/814/png-clipart-gallery-icon-color-wheel-interior-design-services-color-theory-cmyk-computer-wallpaper-symmetry.png'
    },5000)
  }

  inputValue = ''
  onInput(event: any){
    console.log('Event', event)
    this.inputValue = event.target.value
  }
  onClick(){
    console.log('Click!')
  }
  onBlur(str : string){
    this.inputValue = str
  }
  //Директивы условия и циклы----------------
  toggle: any = false
  array = [1,1,2,3,5,8,13]
  objs = [
    {title: 'Post 1', author: 'Daria', comments:[
        {name: 'Max', text: 'lorem 1'},
        {name: 'Max', text: 'lorem 2'},
        {name: 'Max', text: 'lorem 3'},
      ]},
    {title: 'Post 2', author: 'Daria 2', comments:[
        {name: 'Max 2', text: 'lorem 1'},
        {name: 'Max 2', text: 'lorem 2'},
        {name: 'Max 2', text: 'lorem 3'},
      ]}
    ]
  //Pipes----------------
  now: Date = new Date()
}
