

  let productos = [
    {
      nombre: "Batimovil a escala",
      precio: 400000,
      foto: "https://firebasestorage.googleapis.com/v0/b/examen-184d3.appspot.com/o/batimovil.png?alt=media&token=f42124bf-4eb9-4178-a69c-c396f1f149f8",
      descripcion: "Batimovil a escala de la ultima pelicula",
    },
    {
      nombre: "Camiseta Batman",
      precio: 80000,
      foto: "https://firebasestorage.googleapis.com/v0/b/examen-184d3.appspot.com/o/camiseta.jpg?alt=media&token=f72533e2-38d0-4e36-acbd-04b1a9ce5ac2",
      descripcion: "Camiseta original DC",
    },
    {
      nombre: "Gorra Batman",
      precio: 50000,
      foto: "https://firebasestorage.googleapis.com/v0/b/examen-184d3.appspot.com/o/gorra.png?alt=media&token=e6f2d0b8-641c-4acb-9818-09deb22e6b2c",
      descripcion: "Gorra original DC",
    },
    {
      nombre: "Bati termo DC",
      precio: 35000,
      foto: "https://firebasestorage.googleapis.com/v0/b/examen-184d3.appspot.com/o/termo.webp?alt=media&token=952619f3-3bdb-4b96-9be6-b64e1d512882",
      descripcion: "Termo para bati chocolate",
    },
    {
      nombre: "Batmav v Superman",
      precio: 300000,
      foto: "https://firebasestorage.googleapis.com/v0/b/examen-184d3.appspot.com/o/vs.png?alt=media&token=2f2bd247-a710-405d-b9f6-59013b6b8118",
      descripcion: "Imagen a escala de la pelicula Batman v Superma0n",
    },
    {
      nombre: "Bati morral Totto",
      precio: 80000,
      foto: "https://firebasestorage.googleapis.com/v0/b/examen-184d3.appspot.com/o/morral.png?alt=media&token=0ca53136-91f4-40e5-8462-e0b3d0d0f813",
      descripcion: "Bolso original DC",
    },
    {
      nombre: "Silla Gaming Batman",
      precio: 2000000,
      foto: "https://firebasestorage.googleapis.com/v0/b/examen-184d3.appspot.com/o/silla.webp?alt=media&token=d00759be-7e51-419b-ad88-62eaa2e526a4",
      descripcion: "Silla comoda y original DC",
    },
    {
      nombre: "caja de comics Batman",
      precio: 300000,
      foto: "https://firebasestorage.googleapis.com/v0/b/examen-184d3.appspot.com/o/caja.webp?alt=media&token=d3539433-ed0d-4957-a6d6-40878abd590c",
      descripcion: "comics Batman originales",
    },
    {
      nombre: "Bati caja sorpresa",
      precio: 250000,
      foto: "https://firebasestorage.googleapis.com/v0/b/examen-184d3.appspot.com/o/cajasorpresa.jpg?alt=media&token=6e255c61-b983-4bc5-872d-1f814bb72758",
      descripcion: "Caja sorpresa con productos de batman",
    },
    {
      nombre: "Bati lonchera totto",
      precio: 80000,
      foto: "https://firebasestorage.googleapis.com/v0/b/examen-184d3.appspot.com/o/lonchera.png?alt=media&token=cd95df76-6e68-4077-8571-40d9681b2c11",
      descripcion: "Lonchera para llevar tus bati alimentos",
    }
  ];

  //Rutina para recorrer el arreglo y crear las tarjetas de cada producto

  //1. crear una referencia a un elemento "PADRE" o "BASE" donde anclaremos los demas
  let body = document.getElementById("bod");
  
  let fila = document.createElement("div");
  fila.classList.add("row", "align-items-center" )

    productos.forEach(function (producto){
  //2. Necesito recorrer un arreglo
  
    //3. CREAMOS LOS ELEMENTOS NECESARIOS PARA PINTAR LOS PRODUCTOS

    //cuando se crea la columna no se puede crear dando una clase, debe ir solo ("col") 
    let columna = document.createElement("col");
    columna.classList.add("col-4", "col-md-12", "bg-warning" ,"border");

    //creando los elementos se repite mucho la propiedad classlist, entoces se meten estas clases en una cola propiedad(.classList.add("..."))
    let tarjeta = document.createElement("div");
    tarjeta.classList.add("card", "h-50", "w-25", "mt-3", "mb-3","mx-auto");


    let imagen = document.createElement("img");
    imagen.classList.add("card-img-top",  "img-fluid","w", "p-3", "h-100");
    imagen.src = producto.foto;

    //la variable separador se crea mediante un createElemt no un "getElementById"   
    let separador = document.createElement("hr");
    separador.classList.add("w-50","mx-auto", "d-block");
  

    let nombre = document.createElement("h5");
    nombre.classList.add("fw-bold", "text-center", "mx-3");
    nombre.textContent = producto.nombre;

    let precio = document.createElement("h6");
    precio.classList.add("text-center", "text-muted");
    precio.textContent = producto.precio;


    //creando el elemnto "botonAMpliarInfo" debe de ser "btn" No "button"
    let botonAmpliarInfo = document.createElement("btn");
    botonAmpliarInfo.setAttribute("type", "button");
    botonAmpliarInfo.classList.add("btn", "btn-outline-dark", "mx-3","mb-3");
    botonAmpliarInfo.textContent = "Ver producto";

    //VAMOS A ANCLAR (PONER)(DISPONER) LAS ETIQUETAS
    //QUE ACABAMOS DE CREAR EN NUESTRA BASE

    tarjeta.appendChild(imagen);
    tarjeta.appendChild(separador);
    tarjeta.appendChild(nombre);
    tarjeta.appendChild(precio);
    tarjeta.appendChild(botonAmpliarInfo);
    columna.appendChild(tarjeta);
    fila.appendChild(columna);
    body.appendChild(fila)
 
  });

