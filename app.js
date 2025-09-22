// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let input = document.getElementById('amigo');
    let nombre = input.value.trim();

    // Validar que el nombre no esté vacío
    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombre);

    // Limpiar el input después de agregar
    input.value = '';

    // Actualizar la lista visual de amigos
    mostrarLista();
}

// Función para mostrar la lista de amigos 
function mostrarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpiar lista actual

    amigos.forEach((amigo) => {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo 
function sortearAmigo() {
    let resultado = document.getElementById('resultado');

    if (amigos.length === 0) {
        alert('No hay amigos para sortear. Por favor, agrega al menos un nombre.');
        return;
    }

    // Seleccionar un nombre aleatorio
    let nombreAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSeleccionado = amigos[nombreAleatorio];

    // Mostrar el resultado 
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSeleccionado}</strong></li>`;
}

