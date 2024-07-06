function guardar() {
    let nombre_ingresado = document.getElementById("nombre").value //input
    let nombre_ingresado1 = document.getElementById("nombrep").value
    let precio_ingresado = document.getElementById("precio").value 
    let stock_ingresado = document.getElementById("stock").value 
    let imagen_ingresada = document.getElementById("imagen").value 

    console.log(nombre_ingresado,nombre_ingresado1, precio_ingresado,stock_ingresado,imagen_ingresada);
    // Se arma el objeto de js 
    let datos = {
        nombre: nombre_ingresado,
        nombrep: nombre_ingresado1,
        precio:precio_ingresado,
        stock:stock_ingresado,
        imagen:imagen_ingresada
    }
    console.log(datos);
    
    let url = "http://rgproyfinalpy2024.eu.pythonanywhere.com/registro"
    var options = {
        body: JSON.stringify(datos),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    }
    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("Grabado")
            // Devuelve el href (URL) de la página actual
            window.location.href = "../tabla_productos.html";  
            
        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar" )
            console.error(err);
        })
}