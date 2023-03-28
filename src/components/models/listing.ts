export default class Listing{
    constructor(_car: string, _model: string, _price: string){
        this.car = _car;
        this.model = _model;
        this.price = _price;

    }

    public car: string;
    public model: string;
    public price: string;
}

export class Car{
    constructor(_car: string, _model: string, _price: string){
        this.car = _car;
        this.model = _model;
        this.price = _price;

    }

    public car: string;
    public model: string;
    public price: string;
}