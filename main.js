const $divPersonajes = document.getElementById("div-personajes")

fetch("https://hp-api.onrender.com/api/characters")
.then((respuesta)=> {return respuesta.json()})
.then((data)=>{
    console.log(data);
    const personajes = data.slice(0,100)
    console.log(personajes);

    personajes.forEach((personaje) => {
        $divPersonajes.innerHTML += `<div>
        <h4>${personaje.name}</h4>
        
        <img src="${personaje.image}" onerror="this.src='../imagenError.png.png'" alt="imagen de: ${personaje.name}">
        
        <p>Actor: ${personaje.actor}</p>
        <p>Genero: ${personaje.gender}</p>
        <p>Casa: ${personaje.house}</p>
        <p>Fecha de nacimiento: ${personaje.dateOfBirth}</p>
        </div>
        `
    });
})

