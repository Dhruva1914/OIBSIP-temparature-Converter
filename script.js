function convertTemparature(){
    const inputTemparature = parseFloat(document.getElementById("num").value);
    const unit = document.getElementById("unit").value;

    let convertedTemparature;

    if(unit == 'Celsius'){


        convertedTemparature = (inputTemparature * 9/5) + 32;
        document.getElementById("result1").textContent = `${inputTemparature} degrees Celsius = ${convertedTemparature} degrees Fahrenheit.`

        convertedTemparature = inputTemparature + 273.15;
        document.getElementById("result2").textContent = `${inputTemparature} degrees Celsius = ${convertedTemparature} Kelvin.`
    }

    else if(unit === 'Fahrenheit'){

        convertedTemparature = (inputTemparature - 32) * 5/9;
        document.getElementById("result1").textContent = `${inputTemparature} degrees  Fahrenheit = ${convertedTemparature} degrees Celsius.`

        convertedTemparature = (inputTemparature - 32) * 5/9 + 273.15;
        document.getElementById("result2").textContent = `${inputTemparature} degrees Fahrenheit = ${convertedTemparature} Kelvin.`
    }

    else if(unit === 'Kelvin'){

        convertedTemparature = inputTemparature - 273.15;
        document.getElementById("result1").textContent = `${inputTemparature} Kelvin = ${convertedTemparature} degrees Celsius.`

        convertedTemparature = (inputTemparature - 273.15) * 9/5 + 32;
        document.getElementById("result2").textContent = `${inputTemparature} Kelvin = ${convertedTemparature} degrees Fahrenheit`
    }

    else{
        document.getElementById("result1").textContent = `Please select a valid unit`;
    }

}