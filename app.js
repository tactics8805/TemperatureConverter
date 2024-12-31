function convert() {
    // Get the value from the input field
    let celsius = parseFloat(document.getElementById('temp').value);
    
    // Convert celsius to other scales
    let kelvin = celsius + 273;
    let newton = celsius * (33 / 100);
    let fahrenheit = celsius * (9 / 5) + 32;
    
    // Round down the calculated values to the nearest whole integer
    fahrenheit = Math.floor(fahrenheit);
    newton = Math.floor(newton);
    
    // Log the results to the console
    console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
    console.log(`The temperature is ${newton} degrees Newton.`);
    
    // Display the results on the webpage
    document.getElementById('h1').innerHTML = `The temperature is ${fahrenheit} degrees Fahrenheit, ${newton} degrees Newton, ${kelvin} degrees Kelvin, or ${celsius} degrees Celsius. Dress appropriately!`;
}