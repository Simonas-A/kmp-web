import Listing from "../components/models/listing";
import axios from 'axios';

export default class SampleClient {

    // public static async getDataAsync(): Promise<string> {
    //     const url = "https://localhost:7207/WeatherForecast";
    //     const response = await fetch(url, {
    //         method: "GET"
    //     });
    //     const text = await response.text();
    //     return text;
    // }
    public static async getListingById(id: string): Promise<Listing | null> {
        const url = `https://localhost:7207/Car/GetCar/${id}`;
        const response = await fetch(url, {
          method: 'GET'
        });
    
        if (!response.ok) {
          throw new Error('Failed to fetch car listing');
        }
    
        const text = await response.text();
        const listing = JSON.parse(text) as Listing;
        
        // Handle the case where the listing is not found
        if (!listing) {
          return null;
        }
    
        return listing;
      }

    public static async getCarListings(): Promise<Listing[]> {
        const url = "https://localhost:7207/Car/GetCars";
        const response = await fetch(url, {
            method: "GET"
        });
        const text = await response.text();
        // console.log(JSON.parse(text));
        //const text = "[{\"id\":\"de224a3a-2bd7-4b3c-b628-01b57e763925\",\"brand\":\"BMW\",\"model\":\"A6\",\"year\":2002,\"mileage\":5000,\"price\":0,\"owner\":\"\",\"phoneNumber\":\"\"},{\"id\":\"3f9dd87c-42b0-4fed-b129-060028866cce\",\"brand\":\"BMW\",\"model\":\"A6\",\"year\":2002,\"mileage\":500000,\"price\":9999,\"owner\":\"SauliusMangruda\",\"phoneNumber\":\"37069814723\"},{\"id\":\"69fc9fdc-619d-417d-8a72-0cd594a2417a\",\"brand\":\"Cupra\",\"model\":\"Futuristic\",\"year\":2040,\"mileage\":12,\"price\":6947.44,\"owner\":\"Renaldinijus\",\"phoneNumber\":\"864187419\"},{\"id\":\"a6d414b6-9d2c-4765-b012-0de86d2f45f4\",\"brand\":\"BMW\",\"model\":\"A6\",\"year\":2002,\"mileage\":5000,\"price\":0,\"owner\":\"\",\"phoneNumber\":\"\"},{\"id\":\"b6383d05-da24-452d-a296-3b60d3dc0de7\",\"brand\":\"BMW\",\"model\":\"A6\",\"year\":2002,\"mileage\":5000,\"price\":0,\"owner\":\"\",\"phoneNumber\":\"\"},{\"id\":\"36c38d71-ac36-4712-8340-493528164f80\",\"brand\":\"VW\",\"model\":\"GL\",\"year\":2222,\"mileage\":1111111,\"price\":0,\"owner\":\"\",\"phoneNumber\":\"\"},{\"id\":\"8dbf3837-ce9d-43dd-9411-4f19f19aca97\",\"brand\":\"BMW\",\"model\":\"7\",\"year\":2008,\"mileage\":65132,\"price\":0,\"owner\":\"\",\"phoneNumber\":\"\"},{\"id\":\"97a1ec8e-7d4f-4eaf-a951-51c73e5f1feb\",\"brand\":\"BMW\",\"model\":\"A6\",\"year\":2002,\"mileage\":5000,\"price\":0,\"owner\":\"\",\"phoneNumber\":\"\"},{\"id\":\"4b8ccc7c-ac37-450c-b92a-5425937a6bdb\",\"brand\":\"bmw\",\"model\":\"a8\",\"year\":2000,\"mileage\":80000,\"price\":0,\"owner\":\"\",\"phoneNumber\":\"\"},{\"id\":\"ae1d2869-0cec-41a7-95d2-552f1dec48a2\",\"brand\":\"BMW\",\"model\":\"A6\",\"year\":2002,\"mileage\":5000,\"price\":0,\"owner\":\"\",\"phoneNumber\":\"\"},{\"id\":\"30b1600e-b30b-46f1-a82b-6630ff5e3f92\",\"brand\":\"BMW\",\"model\":\"A6\",\"year\":2002,\"mileage\":500000,\"price\":9999,\"owner\":\"SauliusMangruda\",\"phoneNumber\":\"37069814723\"},{\"id\":\"8ce1ee75-4203-4207-bb7b-6b30607a3ea0\",\"brand\":\"Tesla\",\"model\":\"ModelS\",\"year\":2023,\"mileage\":1000,\"price\":40000,\"owner\":\"Elonas\",\"phoneNumber\":\"Duskas\"},{\"id\":\"d1afa419-bdb9-4ee8-bbd1-751490035a85\",\"brand\":\"qweqwe\",\"model\":\"ertert\",\"year\":123,\"mileage\":123,\"price\":0,\"owner\":\"\",\"phoneNumber\":\"\"},{\"id\":\"251ac223-406b-4a06-bccc-76adc3ac3d12\",\"brand\":\"BMW\",\"model\":\"A6\",\"year\":2002,\"mileage\":5000,\"price\":0,\"owner\":\"\",\"phoneNumber\":\"\"},{\"id\":\"a3e1b265-5c10-4d00-852c-78cec123a2bf\",\"brand\":\"Volkswagen\",\"model\":\"Golf\",\"year\":2001,\"mileage\":275000,\"price\":0,\"owner\":\"\",\"phoneNumber\":\"\"},{\"id\":\"2ca145ab-3ae4-4750-8536-7db481e31335\",\"brand\":\"BMW\",\"model\":\"A6\",\"year\":2002,\"mileage\":5000,\"price\":0,\"owner\":\"\",\"phoneNumber\":\"\"},{\"id\":\"4b60f817-b3e3-49ce-b710-8d180a82725c\",\"brand\":\"BMW\",\"model\":\"A6\",\"year\":2002,\"mileage\":5000,\"price\":0,\"owner\":\"\",\"phoneNumber\":\"\"},{\"id\":\"be3771f3-c32a-4c28-8c73-8fdac0c9af02\",\"brand\":\"BMW\",\"model\":\"A6\",\"year\":2002,\"mileage\":5000,\"price\":0,\"owner\":\"\",\"phoneNumber\":\"\"},{\"id\":\"f531df56-bc4d-4036-b8d0-9b4bd4ab72c4\",\"brand\":\"Audi\",\"model\":\"A3\",\"year\":2008,\"mileage\":175333,\"price\":0,\"owner\":\"\",\"phoneNumber\":\"\"},{\"id\":\"57795e78-55fd-426f-8bc6-cfbac778f8a8\",\"brand\":\"BMW\",\"model\":\"A6\",\"year\":2002,\"mileage\":500000,\"price\":9999,\"owner\":\"SauliusMANGRUDA\",\"phoneNumber\":\"+37069814723\"},{\"id\":\"05ab3d93-7ee2-4c39-8417-d1866b8ad142\",\"brand\":\"BMW\",\"model\":\"A6\",\"year\":2002,\"mileage\":5000,\"price\":0,\"owner\":\"\",\"phoneNumber\":\"\"},{\"id\":\"91af411a-8c43-43f0-820c-d503c38daa7d\",\"brand\":\"Pegueot\",\"model\":\"207\",\"year\":2008,\"mileage\":234000,\"price\":0,\"owner\":\"\",\"phoneNumber\":\"\"},{\"id\":\"d9d62353-299f-459a-b106-dffda087cd1a\",\"brand\":\"BETKAS\",\"model\":\"Neprisijunges\",\"year\":2000,\"mileage\":2000,\"price\":1999,\"owner\":\"Simonas\",\"phoneNumber\":\"9111\"},{\"id\":\"d6fcc803-fb63-403a-8a3b-e28af3b4f4ac\",\"brand\":\"SIMONO\",\"model\":\"MASINA\",\"year\":2023,\"mileage\":696969,\"price\":12000,\"owner\":\"SIMONAS\",\"phoneNumber\":\"112\"},{\"id\":\"203917fc-ff14-4be8-810a-ec3d1e679479\",\"brand\":\"BMW\",\"model\":\"A6\",\"year\":2002,\"mileage\":5000,\"price\":0,\"owner\":\"\",\"phoneNumber\":\"\"},{\"id\":\"25b66a6b-58dc-4338-ad96-ed9dc745df04\",\"brand\":\"valkswagen\",\"model\":\"golfukas\",\"year\":9999,\"mileage\":22222,\"price\":199,\"owner\":\"owner\",\"phoneNumber\":\"466525\"},{\"id\":\"c7fddd5a-c763-4aa1-9092-f74418356e15\",\"brand\":\"BMW\",\"model\":\"A6\",\"year\":2002,\"mileage\":5000,\"price\":0,\"owner\":\"\",\"phoneNumber\":\"\"}]";
        return JSON.parse(text);
    }

    public static async editCar(listing: Listing): Promise<Listing[]> {
        const xhr = new XMLHttpRequest();
        // no cors
        xhr.withCredentials = false;

        const url = "https://localhost:7207/Car/EditCar?year=" + listing.year + "&mileage="
        + listing.mileage + "&brand=" + listing.brand + "&model=" + listing.model
        + "&price=" + listing.price + "&owner=" + listing.owner + "&phone=" + listing.phoneNumber;
        const response = await fetch(url, {
            method: "POST"
        });
        const text = await response.text();
        
        return JSON.parse(text);
    }

    static async editCarListing(listing : Listing) {
        console.log("brendas:", listing.brand);
        try {
            
          const url = `https://localhost:7207/Car/UpdateCar/${listing.id}`;
          
          const response = await axios.put(url, listing);
          return response.data;
        } catch (error) {
          console.error('Error editing car listing:', error);
          throw error;
        }
      }

    public static async deleteCar(id : String): Promise<void> {
        const xhr = new XMLHttpRequest();
        // no cors
        xhr.withCredentials = false;
        console.log(id);

        const url = "https://localhost:7207/Car/DeleteCar/"+ id;

        const response = await fetch(url, {
            method: "DELETE"
        });

    }

    public static async addCar(listing: Listing): Promise<void> {
        const url = "https://localhost:7207/Car/AddCar?year=" + listing.year + "&mileage="
         + listing.mileage + "&brand=" + listing.brand + "&model=" + listing.model
         + "&price=" + listing.price + "&owner=" + listing.owner + "&phone=" + listing.phoneNumber;
        const response = await fetch(url, {
            method: "POST",
        });
        const text = await response.text();
    }

    public static async addCarListing(listing: Listing): Promise<void> {
        const url = "https://localhost:7207/Car/AddCar";
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(listing),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const text = await response.text();
    }

    public static getData(): string {
        const url = "https://localhost:7207/WeatherForecast";
        const xhr = new XMLHttpRequest();
        // no cors
        xhr.withCredentials = false;
        
        let text = "";
        xhr.open("GET", url, true);
        
        xhr.onload = function (e) {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    console.log("text" + xhr.responseText);
                    const text = xhr.responseText;
                    return text;
                    // return xhr.responseText;
                    //text = xhr.responseText;
                    //console.log(xhr.responseText);
                    //return xhr.responseText;
                    //console.log(xhr.responseText);
                } else {
                    console.error("nerror" + xhr.statusText);
                }
            }
        };
        xhr.onerror = function (e) {
            console.error("error" + xhr.statusText);
        };
        xhr.send(null);
        return text;
    }
}
