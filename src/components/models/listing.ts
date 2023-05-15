export default class Listing{
    constructor(_year: number, _mileage: number, _brand: string, _model: string, _price: number, _owner: string, _phoneNumber: string, _id: string, images: string[]){
        this.year = _year;
        this.mileage = _mileage;
        this.brand = _brand;
        this.model = _model;
        this.price = _price;
        this.owner = _owner;
        this.phoneNumber = _phoneNumber;
        this.id = _id;
        this.images = images;
    }

    public year: number;
    public mileage: number;
    public brand: string;
    public model: string;
    public price: number;
    public owner: string;
    public phoneNumber: string;
    public id: string;
    public images: string[];
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