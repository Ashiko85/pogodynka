import React from "react";

class Form extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.getWeather}>
                <input type="text" name="city" placeholder="Wybierz miasto..." />
                <input type="text"name="country" placeholder="Wybierz kraj..." />
                <button>Sprawdź pogodę</button>
            </form>
        );
    }
}

export default Form;