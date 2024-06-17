const $divPersonajes = document.getElementById("div-personajes")

fetch("https://hp-api.onrender.com/api/characters")
.then((respuesta)=> {return respuesta.json()})
.then((data)=>{
    console.log(data);
    const personajes = data
    console.log(personajes);

    personajes.forEach((personaje) => {
        $divPersonajes.innerHTML += `
        <h4>${personaje.name}</h4>
        <img src="${personaje.image}" alt="imagen de: ${personaje.name}">
        <p>${personaje.actor}</p>
        <p>${personaje.gender}</p>
        <p>${personaje.house}</p>
        <p>${personaje.dateOfBirth}</p>
        `
    });
})

