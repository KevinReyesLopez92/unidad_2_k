/* este se logro despues de mucho llorar tutoriales y un poco de ia poeque no quiso jalar y unos cuantos consejos de osmar de ingeniria  */
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function agregarCarrito(nombre, precio) {
    carrito.push({
        nombre: nombre,
        precio: precio
    });

    guardarCarrito();
    actualizarCarrito();

    document.getElementById("mensaje").textContent =
        nombre + " agregado al inventario.";
}

function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function actualizarCarrito() {
    let lista = document.getElementById("lista-carrito");
    let contador = document.getElementById("contador");
    let totalArticulos = document.getElementById("total-articulos");
    let totalPrecio = document.getElementById("total");

    lista.innerHTML = "";

    let total = 0;

    for (let i = 0; i < carrito.length; i++) {
        total = total + carrito[i].precio;

        let elemento = document.createElement("li");
        elemento.className =
            "list-group-item d-flex justify-content-between align-items-center gap-3";

        let nombreProducto = document.createElement("span");

        nombreProducto.textContent =
            carrito[i].nombre + " - " +
            carrito[i].precio.toLocaleString("es-MX") +
            " monedas";

        let botonEliminar = document.createElement("button");

        botonEliminar.textContent = "Quitar";
        botonEliminar.className = "btn btn-sm btn-danger";
        botonEliminar.onclick = function () {
            eliminarProducto(i);
        };

        elemento.appendChild(nombreProducto);
        elemento.appendChild(botonEliminar);

        lista.appendChild(elemento);
    }

    contador.textContent = carrito.length;
    totalArticulos.textContent = carrito.length;
    totalPrecio.textContent = total.toLocaleString("es-MX");
}

function eliminarProducto(indice) {
    carrito.splice(indice, 1);

    guardarCarrito();
    actualizarCarrito();

    document.getElementById("mensaje").textContent =
        "Artículo eliminado del inventario.";
}

function vaciarCarrito() {
    carrito = [];

    guardarCarrito();
    actualizarCarrito();

    document.getElementById("mensaje").textContent =
        "Tu inventario está vacío.";
}

actualizarCarrito();