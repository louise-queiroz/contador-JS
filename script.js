let numero = document.getElementById('valor');
let valor = 0;

function somar() {
  valor += 1;
  numero.innerHTML = `${valor}`;
}

function diminuir() {
  valor -= 1;
  numero.innerHTML = `${valor}`;
}

function reset(){
    valor = 0
    numero.innerHTML = `${valor}`;
}