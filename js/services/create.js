// AJAX FUNCTION TO SEND DATA TO DATABASE

let usuario

// IDENTIFY THE INPUTS
let nome = document.getElementById('fname')
let email = document.getElementById('femail')
let tel = document.getElementById('ftel')
let cep = document.getElementById('fcep')
let endereco = document.getElementById('fend')
let numero = document.getElementById('fnum')
let cidade = document.getElementById('fcidade')
let uf = document.getElementById('fUf')

const save = () => {

    // SET USUARIO'S DATA WITH THE INPUT'S VALUES
    usuario = {
        nome: nome.value,
        email: email.value,
        tel: tel.value,
        cep: cep.value,
        endereco: endereco.value,
        numero: numero.value,
        cidade: cidade.value,
        uf: uf.value
    }

    let req = new XMLHttpRequest();

    req.open("POST", "http://localhost:3000/users")

    req.setRequestHeader("Content-Type", "application/json")

    req.send(JSON.stringify(usuario))

    mostrarDados()

    limpar();
}

function mostrarDados() {
    console.log(usuario)
}

const limpar = () => {
    nome.value = "" 
    email.value = "" 
    tel.value = "" 
    cep.value = "" 
    endereco.value = "" 
    numero.value = "" 
    cidade.value = "" 
    uf.value = "" 
}