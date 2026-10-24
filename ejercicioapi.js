const userFound = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
            if (response.ok === false) {
              throw new Error(`Error: ${response.status}`);
            }
        const users = await response.json();
        users.forEach((users) => {
            console.log("ID:", users.id);
            console.log("Nombre:", users.name);
            console.log("Email:", users.email);
            console.log("Ciudad:", users.address.city);
        });

    } catch (error) {
        console.log("Error al obtener los usuarios:",error.message);
    }
}

userFound();
