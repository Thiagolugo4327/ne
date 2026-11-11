let producto = document.getElementById("producto");
let cantidad = document.getElementById("cantidad");

let local = document.getElementById("local");
let domicilio = document.getElementById("domicilio");

let comprar = document.getElementById("comprar");
let resultado = document.getElementById("resultado");

comprar.addEventListener("click", function() {

    let precio = Number(producto.value);
    let cantidadPizzas = Number(cantidad.value);
    let subtotal = precio * cantidadPizzas;

    let envio = 0;
    let modalidad = "";

    let nombreProducto = "";

    if (cantidadPizzas <= 0 || cantidad.value == "") {
        resultado.textContent = "Ingrese una cantidad válida.";
    } else if (!domicilio.checked && !local.checked) {
        resultado.textContent = "Seleccione una modalidad de entrega.";
    } else {

        if (producto.value == "350") {
            nombreProducto = "Muzzarella";
        } else if (producto.value == "420") {
            nombreProducto = "Napolitana";
        } else if (producto.value == "500") {
            nombreProducto = "Especial";
        }

        if (domicilio.checked) {
            modalidad = "Envío a domicilio";
            envio = 120;
        } else if (local.checked) {
            modalidad = "Retirar en el local";
        }

        let total = subtotal + envio;

        resultado.textContent =
            "Pizza: " + nombreProducto +
            ". Cantidad: " + cantidadPizzas +
            ". Subtotal: $" + subtotal +
            ". Modalidad: " + modalidad +
            ". Costo de envío: $" + envio +
            ". Total a pagar: $" + total;
    }

});