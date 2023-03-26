export class CarListing {
    constructor(
      public id: string,
      public carId: string,
      public brand: string,
      public model: string,
      public year: number,
      public mileage: number,
      public price: number
    ) {}
  }