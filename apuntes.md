# Que tenemos que saber

## Dinámicas de react
 - Crear un proyecto
    - Create-react-app
    - Subirlo a un repo
    - Publicar en Github Pages
 - Código
    - Escribir JSX indentado y válido
    - Crear componentes
    - Pasar props
      - Datos
      - Métodos
    - Asignar eventos
    - Hacer peticiones a un servidor
      - Archivo externo
      - Métodos de ciclo de vida
    - Usar PropTypes
    - Usar LocalStorage
    - Usar scss
    - Eliminar errores de la consola
 - Listado de datos 
    - Pintar listados de datos
    - Añadirpropiedades de mi listado de datos
    - Filtrar listado de datos
 - Router
    - Crear páginas
    - Crear una navegación
    - Crear una página de detalle.

## Pasos de un ejercicio

### Fase 1 Pintar la lista

1. Crear repo vacio y clonarlo
2. Crear react-app
3. Limpiar los archivos
4. Mirar el json que nos han dado
5. Crear un estado con la lista vacia
6. Hacer la función fetch y el componenDidMount para llamarla
7. Creamos un componente para sacarla y creamos función para llamarla.
8. En el archivo creado exportamos la función y lo importamos en app.
9. Hacemos un map con los elementos del estado
10. Creamos componentes  de PokeList y PokeCard y dividimos nuestro map en esos elementos.
11. Le pasamos los props con destructuring a cada uno de los componentes.
12. Activamos las prop-types.

### Fase 2 Filter

1. Creamos en el estado una clave query con cadena vacia.
2. Lo pasamos por pros hasta PokeList.
3. Creamos un filter antes del map que ya teníamos. Si el resultado es verdadero, el item pasa.
  - .filter(myPokemon => myPokemon.name.includes(query))
4. Para que no tenga problema con las mayúsculas todo lo ponemos a mayúsculas.
5. Creamos el input y un evento para corregir el valor. 
6. El evento se debe bindear porque lo ejecuta el navegador.
7. Este filter puede sacar a un componente. 

Los componentes funcionales no se pone this.props, se pone solo props

### Fase 3 Router

Vamos a crear dos páginas. 
La principal para la búsqueda
La secundaria para los detalles 

1. En index.js 
~~~
import {HashRouter} from 'react-router-dom';

... <HashRouter><App /></HashRouter> ...
~~~
2. Creamos <Home />  y le pasamos lo q necesita Filter y Pokelist.
3. Luego lo creamos un Detail, por ahora no le pasamos nada. 
4. Importamos switch route y link 
5. Creamos un switch en app y creamos dos rutas.
6. Cuando el componente no tiene props podemos usar component = {PokeDetail}.
7. Si tiene prosp tendremos que usar el render.
8. Luego creamos los links en cada parte. 

### Fase 4 Detalles

Queremos que ahora cada vez q clickamos en un pokemon nos lleve al detalle de ESE pokemon. 
Para identificarlo necesitamos la lista de todos los resultados y algo para identificarlo.

1. Vamos a hacer que la ruta del detalle sea única para cada elemento de la lista.
~~~
    <Link to = {`/poke-detail/${pokemon.id}`} className = "Pokemon-detail">
~~~
2. Debemos ahora recuperar ese id, por eso necesitmas al detalle pasarle los props y lo tendremos que poner con render. 

3. Tenemos que cambiar el path del detalle añadiendole /:id.
4. A ese componente le pasamos routerProps, si consoleamos esta variable nos damos cuenta que en match --> params --> tendremos los datos pasados a la url que coincide con nuestra id. 
5. Tambien le pasamos el array de todos los pokemon para sacar los datos del q buscamos. 
6. Usamos un findIndex para encontrar al pokemon.
7. Con el pokemon localizado podemos pintar sus elementos. 

### Fase 5 Mejoras

Vamos a solucionar el problema del error si recarga la página dentro del detalle. 
