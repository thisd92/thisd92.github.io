const read = () => {
    function ajax(config){
        const xhr = new XMLHttpRequest()
        xhr.open(config.method, config.url, true)

        xhr.onload = e => {
            if(xhr.status === 200){
                config.sucesso(xhr.response)
            }else if(xhr.status >= 400){
                config.erro({
                    code: xhr.status,
                    text: xhr.statusText
                })
            }
        }
        xhr.send()
    }

    function criarTabela(usuarios){
        const linhas = usuarios.map(usuario => {
            const tdId = document.createElement('td')
            tdId.innerHTML = usuario.id

            const tdNome = document.createElement('td')
            tdNome.innerHTML = usuario.nome

            const tdEmail = document.createElement('td')
            tdEmail.innerHTML = usuario.email

            const tdTel = document.createElement('td')
            tdTel.innerHTML = usuario.tel

            const tdCep = document.createElement('td')
            tdCep.innerHTML = usuario.cep

            const tdEnd = document.createElement('td')
            tdEnd.innerHTML = usuario.endereco + ", " + usuario.numero

            const tdCidade = document.createElement('td')
            tdCidade.innerHTML = usuario.cidade

            const tdUF = document.createElement('td')
            tdUF.innerHTML = usuario.uf

            const tr = document.createElement('tr')

            tr.appendChild(tdId)
            tr.appendChild(tdNome)
            tr.appendChild(tdEmail)
            tr.appendChild(tdTel)
            tr.appendChild(tdCep)
            tr.appendChild(tdEnd)
            tr.appendChild(tdCidade)
            tr.appendChild(tdUF)

            return tr
        })
        const tabela = document.getElementById('linhas')
        linhas.forEach(linha => tabela.appendChild(linha))
        //document.getElementById('tabela').appendChild(tabela)
    }

    ajax({
        url: "http://localhost:3000/users",
        method: "get",
        sucesso(resposta){
            const usuarios = JSON.parse(resposta)
            const tdElement = document.querySelector('td')
            if(!tdElement)
            criarTabela(usuarios)
        },
        erro(e){
            const msg = document.createTextNode(`${e.code}: ${e.text}`)
            document.body.appendChild(msg)
        }
    })
}