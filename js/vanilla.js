// VERIFICATE URL WHEN THE WINDOW LOAD
window.onload = () => (verificaUrl())

// GET THE ACTIVE PAGE AND SET THE ACTIVE CLASS FOR THE BUTTON
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

// FLEXBOX PAGE DROPDOWN ACTION
function toggleDrop() {
    const navbar = document.getElementById('navbar')
    const menuBtn1 = document.querySelector('.menu-btn1')
    const menuBtn2 = document.querySelector('.menu-btn2')
    if(navbar.style.display !== "flex"){
        navbar.style.display = 'flex'
        menuBtn1.classList.toggle('active-btn')
        menuBtn2.classList.toggle('active-btn')
    }else{
        navbar.style.display = 'none'
        menuBtn1.classList.toggle('active-btn')
        menuBtn2.classList.toggle('active-btn')
    }
}

// SHOW DROPDOWN WHEN RESIZE
document.body.onresize = () => {
    const elNav = document.getElementById('navbar')
    const menuBtn1 = document.querySelector('.menu-btn1')
    const menuBtn2 = document.querySelector('.menu-btn2')
    if(document.body.clientWidth > 540){
        elNav.style.display = 'flex';
    } else{
        elNav.style.display = 'none';
        menuBtn1.classList.remove('active-btn')
        menuBtn2.classList.remove('active-btn')
    }
}