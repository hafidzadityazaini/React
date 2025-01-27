import axios from "axios";
import { useEffect, useState } from "react";

function Axios() {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        axios
            .get("https://api.open-meteo.com/v1/forecast?latitude=51.5074&longitude=-0.1278&current_weather=true")
            .then((response) => {
                setWeather(response.data.current_weather);
            })
            .catch((error) => {
                console.error("Error fetching weather data:", error);
            });
    }, []);

    return (
        <div>
            <h2>Cuaca di London</h2>
            {weather ? (
                <div>
                    <p>Suhu: {weather.temperature}°C</p>
                    <p>Kecepatan Angin: {weather.windspeed} km/h</p>
                </div>
            ) : (
                <p>Memuat data cuaca...</p>
            )}
        </div>
    );
}

export default Axios;