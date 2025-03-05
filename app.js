let amigos = []; // Lista para almacenar los nombres ingresados

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    // Validar que el nombre no esté vacío
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    amigos.push(nombre); // Agregar el nombre a la lista de amigos
    actualizarLista();
    input.value = ""; // Limpiar el campo de entrada
    input.focus(); // Volver a enfocar el campo de entrada
}

// Función para actualizar la lista en pantalla
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        li.classList.add("name-item");
        lista.appendChild(li);
    });
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    // Verificar si la lista de amigos está vacía
    if (amigos.length === 0) {
        alert("Agregue al menos un nombre antes de sortear.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length); // Obtener un índice aleatorio
    const amigoSorteado = amigos[indiceSorteado]; // Seleccionar el nombre en la posición sorteada

    const resultado = document.getElementById("resultado"); // Obtener la lista de resultados
    resultado.innerHTML = ""; // Limpiar resultados previos
    
    const li = document.createElement("li"); // Crear un nuevo elemento de lista
    li.innerHTML = `El amigo secreto es: <strong>${amigoSorteado}</strong>`; // Asignar el texto con el resultado
    li.classList.add("result-item"); // Agregar una clase para estilos
    resultado.appendChild(li); // Añadir el resultado a la lista en el DOM
}
