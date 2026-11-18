# Gestor de Tareas – Parcial 2 Ingeniería de Software

**Alumno:** Joaquín Demarchi
**Fecha:** 18/11/2026
**Materia:** Ingeniería de Software – ISTEA

## Descripción

Aplicación web simple para gestionar tareas: permite ver un listado,
agregar tareas nuevas y marcarlas como completadas.
Está hecha con HTML, CSS y JavaScript, y se sirve con Nginx dentro de un contenedor Docker.

## Estructura del proyecto

- `index.html`: estructura de la página.
- `styles.css`: estilos.
- `app.js`: lógica del listado de tareas.
- `Dockerfile`: instrucciones para construir la imagen.

## Requisitos

- Tener instalado Docker (Docker Desktop en Windows o Mac).

## Cómo construir e iniciar el contenedor

1. Clonar el repositorio y entrar a la carpeta:

   git clone https://github.com/joaquinDemarchi/parcial2-v2-software.git
   cd parcial2-v2-software

2. Construir la imagen:

   docker build -t parcial2-tareas .

3. Iniciar el contenedor:

   docker run -d -p 8080:80 --name tareas parcial2-tareas

4. Abrir en el navegador: http://localhost:8080

5. Para detener y eliminar el contenedor:

   docker stop tareas
   docker rm tareas