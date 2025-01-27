// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    const valueInput = document.getElementById("amigo").value;
    if (valueInput == "") {
        alert("Por favor, ingresa el nombre del amigo");        
    } else {
        amigos.push(valueInput);
        limpiarInput()
    }
    recorrerAmigos();
    
}

function limpiarInput() {
    document.getElementById("amigo").value = "";
}

function recorrerAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    for(let i = 0; i < amigos.length; i++){
        const item = document.createElement("LI");
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    };
};

function sortearAmigo() {
    if (amigos.length == 0) {
        alert("No hay amigos para ordenar");
    }else {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = document.getElementById("resultado");
        amigoSorteado.textContent = amigos[indiceAleatorio];
        listaAmigos.innerHTML = "";
    };
};
