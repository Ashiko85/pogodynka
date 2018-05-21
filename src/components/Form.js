import React from "react";

class Form extends React.Component{
    render(){
        return(
            <form>
                <input type="text" name="city" placeholder="Wybierz miasto..." />
                <input type="text"name="coutry" placeholder="Wybierz kraj..." />
                <button>Sprawdź pogodę</button>
            </form>
        );
    }
}

export default Form;