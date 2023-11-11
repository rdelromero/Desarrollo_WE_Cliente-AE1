window.onload = function() {
    but1.onclick = calcularPrecio;
}

function calcularPrecio() {
    // Obtener el tamaño de la pizza seleccionada
    const tamanoPizza = document.querySelector('input[name="tamano"]:checked');
    if (!tamanoPizza) {
        alert('Debe seleccionar un tamaño de pizza.');
        return;
    }

    //Dado que pueden ser varios los ingredientes seleccionados, usamos querySelectorAll
    const ingredientesExtras = document.querySelectorAll('input[name="ingredientesExtras"]:checked');
    if (ingredientesExtras.length === 0) {
        alert('Debe seleccionar al menos un ingrediente.');
        return;
    }
    
    // Calcular el precio base de la pizza
    let precioBase = parseInt(tamanoPizza.value);
    
    // Calcular el precio de los ingredientes extras
    let precioExtras = 0;
    for (extra of ingredientesExtras) {
        precioExtras += parseFloat(extra.value)
    }
    
    // Calcular el precio total, precio pizza * cantidad de pizzas
    let precioTotal = (precioBase + precioExtras)*inputnumber1.value;
    //Precio redondeado a la centésima
    let precioTotalRedondeado = Math.round(precioTotal*100)/100;;
    let precioTotalRedondeadoEntera = Math.floor(precioTotalRedondeado);
    let precioTotalRedondeadoDecimal = Math.round((precioTotalRedondeado-precioTotalRedondeadoEntera)*100);
    
    // Mostrar el precio total en formato anglosajón
    //document.getElementById('precio').textContent = precioTotalRedondeado;
    // Mostrar el precio total en la página en formato español
    document.getElementById('precio').textContent = precioTotalRedondeadoEntera+","+precioTotalRedondeadoDecimal+' €';
    document.getElementById('precioTotal').style.display = 'block';
}