
const imagenes = document.querySelectorAll("img");
imagenes.forEach((imagen) => {
    imagen.addEventListener("click", () => {
        imagen.style.border = imagen.style.border ? "" : "2px solid red";
    });
});

document.getElementById("calcular").addEventListener("click", () => {
    const total =
        Number(document.getElementById("sticker1").value) +
        Number(document.getElementById("sticker2").value) +
        Number(document.getElementById("sticker3").value);
    const resultado = document.getElementById("resultado");
    if (total <= 10) {
        resultado.textContent = `Llevas ${total} stickers`;
    } else {
        resultado.textContent = "Llevas demasiados stickers";
    }
});

document.getElementById("ingresar").addEventListener("click", () => {
    const password =
        document.getElementById("digit1").value +
        document.getElementById("digit2").value +
        document.getElementById("digit3").value;
    const mensaje = document.getElementById("mensaje");
    if (password === "911") {
        mensaje.textContent = "Password 1 correcto";
    } else if (password === "714") {
        mensaje.textContent = "Password 2 correcto";
    } else {
        mensaje.textContent = "Password incorrecto";
    }
});
