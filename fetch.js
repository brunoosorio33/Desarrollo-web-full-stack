// Pokemon


/* const obtainPokemon = async () => {
    try {
        // Pedimos los datos y esperamos
        const response = await fetch("https://pokeapi.com/api/v2/pokemon/pikachu")
        const pokemon = await response.json();
        console.log("Nombre", pokemon.name)
        console.log("Experiencia base:", pokemon.base_experience);
        console.log("La altura es:", pokemon.height)
        console.log("El peso es", pokemon.weight)
    } catch(eror){
        console.log("Error al conectar Api", error)
    }
} 

obtainPokemon() */

// Ejercicio 1

const foundProfile = async () => {
    try {
        const user = "brunoosorio33";
        const response = await fetch(`https://api.github.com/users/${user}`);

        if (response.ok === false) {
            throw new Error("Usuario no encontrado");
        }
        const data = await response.json();
        console.log("Nombre: " + data.name);

    } catch (error) {
        console.log("Error al encontrar el usuario");
    }
};

foundProfile();

