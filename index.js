//Agregando lo visto en Coder house.
//DOM
const departamento1 = document.getElementById("duplex");
const departamento2 = document.getElementById("departamento_moron");
const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("comprar1");
const boton4 = document.getElementById("comprar2");

const repetirAccion = () => {
    boton1.addEventListener("click", () => {
        alert(`tipo: duplex
                Direccion: Jujuy 1040, Morón. Pcia de Bs.As
                Habitaciones: 2
                Cocina: cocina separada del comedor, completa con bajo mesada y completa
                Comedor: comedor espacioso, entrada directa a la casa
                Baños: 2
                PrecioUSD: 52000
        `);
    });

    boton2.addEventListener("click", () => {
        alert(`tipo: duplex
                Direccion: Ubicación Vieytes 369 - Morón - Prov. Buenos Aires
                Habitaciones: 2
                Cocina: Cocina comedor con amplio desayunador y mesada mármol negro, con bajo mesada y alacena de primera calidad  
                Baños: 2
                PrecioUSD: 172000
                Cochera con acceso incluido de portones individuales
                Lavadero: lavadero privado
        `);
    });

    //Swet alert
    boton3.addEventListener("click", () => {
    swal("Gracias por tu compra", "Acabas de comprar una casa!", "success");

    });

    boton4.addEventListener("click", () => {
    swal("Gracias por tu compra", "Acabas de comprar una casa!", "success");
    
    });

}
repetirAccion();


//objetos
const duplex = [{
    departamento: "Duplex",
    Direccion: "Jujuy 1040, Morón. Pcia de Bs.As",
    Habitaciones: 2,
    HabitacionesDescription: "Ambas habitaciones con placar incluido, solo una habitacion posee aire acondicionado y altillo con funcion de guardado, ",
    cocina: "Cocina separada del comedor, completa con bajomesada y alacena",
    comedor: "Comedor espacioso, entrada directa a la casa",
    Baños: 2,
    bañosDescription: "Baño de la planta baja completo con ducha incluida, baño de la 2 planta completo",
    precioUsd: "USD52000"
}];
    
const departamento = [{
    departamento: "Departamento 4 Ambientes",
    Direccion: "Ubicación Vieytes 369 - Morón - Prov. Buenos Aires",
    Habitaciones: 3,
    cocina: "Cocina comedor con amplio desayunador y mesada mármol negro, con bajo mesada y alacena de primera calidad.",
    baños: 2,
    bañosDescription: "Baño completo con artefactos Roca primera línea mesada de mármol verde(primera planta), Baño completo con artefactos Roca de primera línea, mesada de mármol marrón(segunda planta). ",
    precioUsd: "USD170000",
    cochera: "2 cocheras con acceso de portones individuales al frente del edificio",
    lavadero: "Lavadero Privado"
}];


duplex.forEach((duplex) => {
    console.log(`Direccion: ${duplex.Direccion} Habitaciones: ${duplex.Habitaciones} Precio en Dolares: ${duplex.precioUsd}`);
})

//JSON

localStorage.setItem("duplex", JSON.stringify(duplex));
localStorage.setItem("departamento", JSON.stringify(departamento));

//fetch
fetch("data.json")
    .then((res) => res.json())
    .then((data) => console.log(data))