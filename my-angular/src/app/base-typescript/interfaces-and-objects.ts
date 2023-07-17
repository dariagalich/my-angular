//Описание интерфейса
interface UserInterface {
  name: string
  age: number
  logInfo: () => void
  id?: any
}
//Описание объекта интерфейса
const user: UserInterface = {
  name: 'Daria',
  age: 22,
  logInfo() {
    console.log(this.name + ' ' + this.age)
  }
}
