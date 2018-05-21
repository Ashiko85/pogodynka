import React from "react";
import Titles from "./components/Titles.js";
import Form from "./components/Form.js";
import Weather from "./components/Weather.js";

const API_KEY = "0f948470dae75d862088c86951d1e558";

class App extends React.Component{
    getWeather = async () => {
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Szczecin&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();
    };

    render(){
        return(
            <div>
           <Titles />
           <Form />
           <Weather />
            </div>
        );
    }
}

export default App;