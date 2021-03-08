function medidaHipotenusa() {
  //Criada uma variável para cada entrada de dados
  let opcao1 = document.getElementById("hipotenusa").value;
  let opcao2 = document.getElementById("catetoA").value;
  let opcao3 = document.getElementById("catetoB").value;

  //Condicional para saber qual valor deseja fazer o cálculo
  if (opcao1 === "") {
    let n1 = parseInt(document.getElementById("catetoA").value);
    let n2 = parseInt(document.getElementById("catetoB").value);
    let hipo = n1 * n1 + n2 * n2;
    hipo = document.getElementById("result").value = Math.sqrt(hipo);
  } else if (opcao2 === "") {
    let n1 = parseInt(document.getElementById("hipotenusa").value);
    let n2 = parseInt(document.getElementById("catetoB").value);
    let catetoA = n1 * n1 - n2 * n2;
    catetoA = document.getElementById("result").value = Math.sqrt(catetoA);
  } else if (opcao3 === "") {
    let n1 = parseInt(document.getElementById("hipotenusa").value);
    let n2 = parseInt(document.getElementById("catetoA").value);
    let catetoB = n1 * n1 - n2 * n2;
    catetoB = document.getElementById("result").value = Math.sqrt(catetoB);
  }
}
