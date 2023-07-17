var Server = /** @class */ (function () {
    function Server(name, ip) {
        this.status = 'working';
        this.name = name;
        this.ip = ip;
    }
    Server.prototype.turnOn = function () {
        this.status = "working";
    };
    Server.prototype.turnOff = function () {
        this.status = "offline";
    };
    Server.prototype.getStatus = function () {
        return this.status;
    };
    Server.VERSION = '1.0.3';
    return Server;
}());
//создание объекта класса
var server = new Server('AWS', 1234);
