function modificar() {
    let id = document.getElementById("id").value
    let nombre_ingresado = document.getElementById("nombre").value
    let nombre_ingresado1 = document.getElementById("nombrep").value
    let precio_ingresado = document.getElementById("precio").value 
    let stock_ingresado = document.getElementById("stock").value 
    let imagen_ingresada = document.getElementById("imagen").value 

    let datos = {
        nombre: nombre_ingresado,
        nombrep: nombre_ingresado1,
        precio:precio_ingresado,
        stock:stock_ingresado,
        imagen:imagen_ingresada
    }

    console.log(datos);

    let url = "http://rgproyfinalpy2024.eu.pythonanywhere.com/update/"+id
    var options = {
        body: JSON.stringify(datos),
        method: 'PUT',
        
        headers: { 'Content-Type': 'application/json' },
        // el navegador seguirá automáticamente las redirecciones y
        // devolverá el recurso final al que se ha redirigido.
        redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("modificado")
            alert("Registro modificado")

            //Puedes utilizar window.location.href para obtener la URL actual, redirigir a otras páginas
           window.location.href = "../tabla_productos.html";
          
        })
        .catch(err => {
            this.error = true
            console.error(err);
            alert("Error al Modificar")
        })      
}