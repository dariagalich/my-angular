class Server {
  static VERSION = '1.0.3'

  private status: string = 'working'

  constructor(public name: string, protected ip: number) {
    this.name = name
    this.ip = ip
  }

  public turnOn(){
    this.status = "working"
  }

  protected turnOff(){
    this.status = "offline"
  }

  public getStatus(): string{
    return this.status
  }
  }

  //создание объекта класса
const server: Server = new Server('AWS', 1234)
