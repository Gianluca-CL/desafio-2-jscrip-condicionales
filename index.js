

const precioBase = 400000;

const precioSpan = document.querySelector(".precio-inicial");
const cantidadSpan = document.querySelector(".cantidad");
const valorTotalSpan = document.querySelector(".valor-total");

const botonIncrementar = document.querySelector("p button:nth-child(2)");
const botonDecrementar = document.querySelector("p button:nth-child(3)");

precioSpan.innerHTML = precioBase;
cantidadSpan.innerHTML = 0;
valorTotalSpan.innerHTML = 0;

function actualizarTotal() {
    const cantidad = parseInt(cantidadSpan.innerHTML);
    const total = cantidad * precioBase;
    valorTotalSpan.innerHTML = total;
}


botonIncrementar.addEventListener("click", () => {
    let cantidadActual = parseInt(cantidadSpan.innerHTML);
    cantidadActual++;
    cantidadSpan.innerHTML = cantidadActual;
    actualizarTotal();
});

botonDecrementar.addEventListener("click", () => {
    let cantidadActual = parseInt(cantidadSpan.innerHTML);
    if (cantidadActual > 0) {
        cantidadActual--;
        cantidadSpan.innerHTML = cantidadActual;
        actualizarTotal();
    }
});