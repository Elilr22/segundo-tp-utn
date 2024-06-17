const $divPersonajes = document.getElementById("div-personajes")

fetch("https://hp-api.onrender.com/api/characters")
.then((respuesta)=> {return respuesta.json()})
.then((data)=>{
    console.log(data);
    const personajes = data
    console.log(personajes);

    personajes.forEach((personaje) => {
        $divPersonajes.innerHTML += `<h4>${personaje.name}</h4>`
    });
})

