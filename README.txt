1- COMAS: exceptuadas en los objetos del 1,2,3,4,5,7,8,9 (en el objeto 6 ya existe una ","...y en el objeto numero 6 NO es necesaria ya que es el ultimo objeto)

2- NO tenia agregada las imagenes

3- la FILA se debe crear como un "DIV" y necesita una "classList" 

4- Se esta exportando una funcion que no es necesaria en la tenia "tienda.js"

5- Cuando se crea la FILA puede revolverse de 2 maneras : 
    
    1-Crear una etiqueta de HTML,la cual pueda ser el PADRER de la FILA. 
    2-En cambio de crear la FILA desde JS, crearla en HTML y llamarla por ID en JS.

6- Cuando se crea la FILA se esta creando como "let fila = document.createElementById("fila")",
    en vez de "let fila = document.createElement("fila")"

7- En la funcion del (foreach) falta el PARAMETRO "producto".

8- Cuando se crea la columna NO se puede crear dando una clase,debe ir solo ("col")

9- Creando los elementos se repite la propiedad classList,entonces se meten estas clases en una sola propiedad 
    (.classList.add("..."))

10- La variable SEPARADOR se crea mediante un createElement no un ("getElementById")   

11- Creando el elemento  "botonAmpliarInfo" debe de ser "btn" NO "Button"