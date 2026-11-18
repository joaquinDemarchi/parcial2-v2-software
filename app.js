const formulario = document.getElementById('form-tarea');
const entrada = document.getElementById('input-tarea');
const lista = document.getElementById('lista-tareas');
const contadorPendientes = document.getElementById('contador-pendientes');
const botonLimpiar = document.getElementById('boton-limpiar');

let tareas = [
  { texto: 'Revisar el stock de insumos', completada: false },
  { texto: 'Preparar el informe semanal', completada: true },
  { texto: 'Llamar al proveedor', completada: false }
];

function mostrarTareas() {
  lista.innerHTML = '';

  tareas.forEach((tarea, indice) => {
    const item = document.createElement('li');
    item.textContent = tarea.texto;

    if (tarea.completada) {
      item.classList.add('completada');
    }

   
    item.addEventListener('click', () => {
      tareas[indice].completada = !tareas[indice].completada;
      mostrarTareas();
    });

    lista.appendChild(item);
  });

    actualizarResumen();
}

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();
  const texto = entrada.value.trim();

  if (texto === '') {
    return;
  }

  tareas.push({ texto: texto, completada: false });
  entrada.value = '';
  mostrarTareas();
});

function actualizarResumen() {
  const pendientes = tareas.filter((tarea) => !tarea.completada).length;
  contadorPendientes.textContent = pendientes;
}

botonLimpiar.addEventListener('click', () => {
  tareas = tareas.filter((tarea) => !tarea.completada);
  mostrarTareas();
});

mostrarTareas();