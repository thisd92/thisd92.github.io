let points = 0;
let counter = 0;
let record;

const counterElement = document.getElementById('clicks');
counterElement.textContent = counter;

const resultElement = document.getElementById('result');
resultElement.textContent = points;

const recordElement = document.getElementById('record');

const btnReset = document.getElementById("resetBtn");
btnReset.addEventListener('click', reset)

function reset() {
  window.location.reload();
}

function setLocalStorage(){
  if(localStorage.getItem("record")){
    if(localStorage.getItem("record") > counter){
      localStorage.setItem("record", counter)
    }
  } else {
    localStorage.setItem("record", counter)
  }
}

function getLocalStorage(){
  if(localStorage.getItem("record") != 0){
    record = localStorage.getItem("record")
    recordElement.textContent = record;
  }
}