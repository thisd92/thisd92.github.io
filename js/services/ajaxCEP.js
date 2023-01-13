// AJAX FUNCTION TO AUTOCOMPLETE POSTAL CODE (CEP)
const getCep = () => {

    let cep = document.getElementById('fcep').value
    let endereco = document.getElementById('fend')
    let cidade = document.getElementById('fcidade')
    let uf = document.getElementById('fUf')
    
    function ajax(config) {
        const xhttp = new XMLHttpRequest()
        xhttp.open(config.method, config.url, true)
    
        xhttp.onload = e => {
            if (xhttp.status === 200) {
                config.success(xhttp.response)
            } else if (xhttp.status >= 400) {
                config.erro({
                    code: xhttp.status,
                    text: xhttp.statusText
                })
            }
        }
        xhttp.send()
    }
    
    ajax({
        url: `https://viacep.com.br/ws/${cep}/json`,
        method: "get",
        success(resp) {
            // SET RESPONSE TO THE INPUTS
            const codigo = JSON.parse(resp)
            cidade.value = codigo.localidade
            uf.value = codigo.uf
            endereco.value = codigo.logradouro
        },
        erro(e) {
            const msg = document.createTextNode(`${e.code}: ${e.text}`)
            document.body.appendChild(msg)
        }
    
    })
}