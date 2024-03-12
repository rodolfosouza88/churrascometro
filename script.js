let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
  console.log("Calculando...");

  let adultos = inputAdultos.value;
  let criancas = inputCriancas.value;
  let duracao = inputDuracao.value;

  let qtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2) * criancas;
  let qtTotalCerveja = cervejaPP(duracao) * adultos;
  let qtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2) * criancas;

  resultado.innerHTML = `<p>${qtTotalCarne / 1000} Kg de Carne</p>`;
  resultado.innerHTML += `<p>${Math.ceil(qtTotalCerveja / 355)} Latas de Cerveja</p>`;
  resultado.innerHTML += `<p>${Math.ceil(qtTotalBebidas / 2000)}garrafas de Bebida</p>`;
}

function carnePP(duracao) {
  if (duracao >= 6) {
    return 650;
  } else {
    return 400;
  }
}

function cervejaPP(duracao) {
  if (duracao >= 6) {
    return 2000;
  } else {
    return 1200;
  }
}

function bebidasPP(duracao) {
  if (duracao >= 6) {
    return 2000;
  } else {
    return 1200;
  }
}
