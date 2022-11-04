let usuario

let nome = document.getElementById('fname')
let email = document.getElementById('femail')
let tel = document.getElementById('ftel')
let cep = document.getElementById('fcep')
let endereco = document.getElementById('fend')
let numero = document.getElementById('fnum')
let cidade = document.getElementById('fcidade')
let uf = document.getElementById('fUf')

const getDados = () => {

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
    mostrarDados()
}

function mostrarDados() {
    console.log(usuario)
}