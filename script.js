const pantalla = document.getElementById('pantalla');
const listaHistorial = document.getElementById('lista-historial');

function agregarAPantalla(valor) {
    pantalla.value += valor;
}

function borrarUltimoCaracter() {
    pantalla.value = pantalla.value.slice(0, -1);
}

function calcular() {
    try {
        const resultado = eval(pantalla.value);
        agregarAHistorial(pantalla.value + ' = ' + resultado);
        pantalla.value = resultado;
    } catch (error) {
        pantalla.value = 'Error';
    }
}

function borrarPantalla() {
    pantalla.value = '';
}

function agregarAHistorial(item) {
    const li = document.createElement('li');
    li.textContent = item;
    listaHistorial.appendChild(li);
    guardarEnLocalStorage(item);
}

function guardarEnLocalStorage(item) {
    let historial = JSON.parse(localStorage.getItem('historialCalculadora')) || [];
    historial.push(item);
    localStorage.setItem('historialCalculadora', JSON.stringify(historial));
}

function cargarHistorialDesdeLocalStorage() {
    const historial = JSON.parse(localStorage.getItem('historialCalculadora')) || [];
    historial.forEach(item => {
        agregarAHistorial(item);
    });
}

function borrarHistorial() {
    listaHistorial.innerHTML = '';
    localStorage.removeItem('historialCalculadora');
}

cargarHistorialDesdeLocalStorage();
