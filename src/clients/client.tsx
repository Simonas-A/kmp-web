import axios from 'axios';
import  {Car}  from '../Car';
import { CarListing } from '../CarListing';
import { Listing } from '../Listing';

const BASE_URL = 'https://localhost:7207';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getCars = async (): Promise<Car[]> => {
  const response = await api.get('/Car/GetCars');
  return response.data;
}

// GET /Car/GetCar/{id}
export async function getCar(id: string): Promise<Car> {
  const response = await api.get<Car>('/Car/GetCar/'+id);
  return response.data;
}

// POST /Car/AddCar
export async function addCar(car: Car): Promise<string> {
  const response = await api.post<string>('/Car/AddCar?year='+car.year +'&mileage='+car.mileage+'&brand='+car.brand+'&model='+car.model);
  return response.data;
}

export const getCarListings = async (): Promise<CarListing[]> => {
  const response = await api.get('/GetCarListings');
  return response.data;
}

export async function getCarListingById(id: string): Promise<CarListing> {
  const response = await api.get<CarListing>('/GetCarListing/'+id);
  return response.data;
}

export const getListings = async (): Promise<Listing[]> => {
  const response = await api.get('/Listing/GetListings');
  return response.data;
}

export async function getListingById(id: string): Promise<Listing> {
  const response = await api.get<Listing>('/Listing/GetListing/'+id);
  return response.data;
}

export async function addListing(listing: Listing): Promise<string> {
  const response = await api.post<string>('/Listing/addListing?price='+listing.price+'&carId='+listing.carId);
  return response.data;
}


