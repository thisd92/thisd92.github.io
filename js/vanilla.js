window.onload = () => (verificaUrl())

function verificaUrl(){
    let doc = window.location.href.toString()
    if(doc.includes('create')){
        const li = document.getElementsByClassName('list')
        li[0].className = "active"
    }else if(doc.includes('read')){
        const li = document.getElementsByClassName('list')
        li[1].className = "active"
    
    }else if(doc.includes('update')){
        const li = document.getElementsByClassName('list')
        li[2].className = "active"
    
    }else if(doc.includes('delete')){
        const li = document.getElementsByClassName('list')
        li[3].className = "active"
    }
}