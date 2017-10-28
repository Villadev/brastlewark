#### Aplicación frontend de listado para la visualización de personajes de la nueva villa conquerida 
# Brastlewark

Al conqueir una nuvea villa, esta aplicación te permite visualizar todos sus habitantes y sus datos, tanto rasgos fisicos como profesión o amigos.
La aplicación has ido creada en angular 1.5, utilizando componentes, para un mayor reaprovechamiento del código y el control del negocio.
Para la maquetación he utilizado bootstrap

## Extracción de datos
Los datos has sido extraidos del siguiente servicio:
 * https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json
 
##  Estructura de ficheros de la aplicación
### ./
* app.js - Carga de los modulos requeridos para la aplicación, configuración del locationProvider y inicio de la app
* index.html - Carga de los scripts y estilos requeridos y inicialización del contenedor

### /models
* person.js - Modelo de personas, controlando las variables de la entidad con metodos. 
* personList.js - Gestor de listados de persons utilizado con funciones como: "personList.getPersonByName()"

### /services
* constants.js - Constants utilizadas en la aplicación
* connectionRest.js - Servicio para la gestión de peticiones a servicios externos, en este caso peticiones GET
* getDataService.js - Servicio para centralizar las peticiones y darles formato tanto de en el request como en el response

### /components
Componentes utilizados por la aplicación
#### /components/controllers
* personInfoModel.js - Control del modal donde mostramos la información del personaje seleccionado
* personRow.js - Control del la fila donde es mostrado el personaje

#### /components/views 
* personInfoModal.html - Contenido HTML con la información del personaje
* personRow.hmtl -Maquetación de la fila de los personajes

