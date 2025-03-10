//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];


function adicionarAmigo(){
    let inputAmigo = document.getElementById("amigo");
    let nome = inputAmigo.value;

    if(!nome){
        alert("Digite o nome do amigo");
        return
    }
    //verificar se nome do amigo já existe na lista
    amigos.push(nome);
    inputAmigo.value = "";
    inputAmigo.focus();
    atualizarlista();
    }
    function atualizarlista(){
        let listaAmigos = document.getElementById("listaAmigos");
        listaAmigos.innerHTML = "";

        for(let i = 0; i< amigos.length; i++){
            let item =document.createElement("li");
            item.textContent = amigos[i];
            listaAmigos.appendChild(item);
        } 
        console.log(amigos);
    }

        function sortearAmigo() {
            if(amigos.length === 0){
                alert("Nenhum amigo adicionado");
                return;
            }
            let indice = Math.floor (Math.random() * amigos.length);
            let sorteado = amigos[indice];

            let resultado = document.getElementById("resultado");
            resultado.innerHTML = `O amigo sorteado é: <strong>${sorteado}</strong>`;
            
            listaAmigos.innerHTML = "";
        }


    
    