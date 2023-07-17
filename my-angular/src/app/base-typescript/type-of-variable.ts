//типы переменных
  //строка
  let str: string = 'Hello Typescript'
  // число
  let num: number = 42
  // логическое
  let bul: boolean = true
  // массив
  let strArray: string[] = ['h','e','l']
  let numArray: Array<number> = [1,2,3]
//работа с функциями
  //тип функции void-означает, что ф-я ничего не возвращает
  function logInfo (name:string, age:number): void{
    console.log(`Info: ${name},${age}`)
  }
  //вызов ф-и
  logInfo('Пример имени', 25)

  function calc (a:number, b:number| string): number{
    //если b строка, приводим значение к конвертиованному значению,
    //т.е. к числу
    if (typeof b === 'string') b = +b
    return a + b
  }
  //вызов ф-и
  console.log(calc(2,'f'))
