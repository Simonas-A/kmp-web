export default class Listing{
    constructor(_year: number, _mileage: number, _brand: string, _model: string){
        this.year = _year;
        this.mileage = _mileage;
        this.brand = _brand;
        this.model = _model;
    }

    public year: number;
    public mileage: number;
    public brand: string;
    public model: string;
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