# ChallMyhotel
Este proyecto se generó en Angular CLI version 13.3.0.

Se utilizó TailwindCSS para los estilos de CSS.
Se utilizó Angular Material para los componentes.

Se desarrolló un CRUD de empleados con nombre, fecha de creación, sectores y disponibilidad de vacaciones. 
Las mismas se pueden visualizar en la Tabla como también agregar nuevos empleados, editarlos modificando esas propiedades y eliminarlos.
En la tabla se podrá paginar como también filtrar los datos que contiene la tabla.
Para la validación del alta y modificación de los datos se utilizó Reactive Forms.
Para el formato fecha se utilizó un Pipe.


Las opciones para vacaciones son: 
Disponible (Se pintará de color verde)
No Disponible (Se pintará de color rojo)
Pendiente (Se pintará de color amarillo).
## Development server
1- Clonar el repositorio. 
2- Ejecutar el comando NPM INSTALL para generar el Node_Modules con todo lo necesario para el proyecto.
3- Ejecutar el comando JSON-SERVER --WATCH DB.JSON para levantar el Json Server y poder interactuar con la Api. http://localhost:3000/employee
4- Ejecutar el comando NG-SERVE para levantar el proyecto Angular en http://localhost:4200/
