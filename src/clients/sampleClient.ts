
export default class SampleClient {

    public static async getDataAsync(): Promise<string> {
        const url = "https://localhost:7207/WeatherForecast";
        const response = await fetch(url, {
            method: "GET"
        });
        const text = await response.text();
        return text;
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