import Listing from "../components/models/listing";

export default class SampleClient {

    public static async getDataAsync(): Promise<string> {
        const url = "https://localhost:7207/WeatherForecast";
        const response = await fetch(url, {
            method: "GET"
        });
        const text = await response.text();
        return text;
    }

    public static async getCarListings(): Promise<Listing[]> {
        const url = "https://localhost:7207/Car/GetCars";
        const response = await fetch(url, {
            method: "GET"
        });
        const text = await response.text();
        return JSON.parse(text);
    }

    public static async editCar(): Promise<Listing[]> {
        const url = "https://localhost:7207/Car/EditCars";
        const response = await fetch(url, {
            method: "POST"
        });
        const text = await response.text();
        return JSON.parse(text);
    }

    public static async addCar(listing: Listing): Promise<void> {
        const url = "https://localhost:7207/Car/AddCar?year=" + listing.year + "&mileage=" + listing.mileage + "&brand=" + listing.brand + "&model=" + listing.model;
        const response = await fetch(url, {
            method: "POST",
            // body: JSON.stringify(listing)
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