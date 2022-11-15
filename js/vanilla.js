window.onload = () => (verificaUrl())

function verificaUrl() {
    let doc = window.location.href.toString()
    if (doc.includes('create')) {
        const create = document.getElementById('create')
        create.className += " active"
    } else if (doc.includes('read')) {
        const read = document.getElementById('read')
        read.className += " active"
    } else if (doc.includes('update')) {
        const update = document.getElementById('update')
        update.className += " active"
    } else if (doc.includes('delete')) {
        const del = document.getElementById('del')
        del.className += " active"
    }
}

function toggleDrop() {
    const navbar = document.getElementById('navbar')
    const menuBtn1 = document.querySelector('.menu-btn1')
    const menuBtn2 = document.querySelector('.menu-btn2')
    const menuBtn3 = document.querySelector('.menu-btn3')
    if(navbar.style.display !== "flex"){
        navbar.style.display = 'flex'
        menuBtn1.classList.toggle('active-btn')
        menuBtn2.classList.toggle('active-btn')
        menuBtn3.classList.toggle('active-btn')
    }else{
        navbar.style.display = 'none'
        menuBtn1.classList.toggle('active-btn')
        menuBtn2.classList.toggle('active-btn')
        menuBtn3.classList.toggle('active-btn')
    }
}