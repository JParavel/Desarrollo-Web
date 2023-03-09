function saludos(user){
    console.log("Hola "+ (user?.name??"usuario"));
}

let user = {
    // name: "El chanclas"
}

saludos(user) //"Hola El Chanclas"