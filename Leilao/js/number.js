function mais_4(){
  var atual = document.getElementById("prop4").value;
  var novo = atual - (-1); //Evitando Concatenacoes
  document.getElementById("prop4").value = novo;
}

function menos_4(){
  var atual = document.getElementById("prop4").value;
  if(atual > 0) { //evita números negativos
    var novo = atual - 1;
    document.getElementById("prop4").value = novo;
  }
}

function mais_3(){
  var atual = document.getElementById("prop3").value;
  var novo = atual - (-1); //Evitando Concatenacoes
  document.getElementById("prop3").value = novo;
}

function menos_3(){
  var atual = document.getElementById("prop3").value;
  if(atual > 0) { //evita números negativos
    var novo = atual - 1;
    document.getElementById("prop3").value = novo;
  }
}

function mais_2(){
  var atual = document.getElementById("prop2").value;
  var novo = atual - (-1); //Evitando Concatenacoes
  document.getElementById("prop2").value = novo;
}

function menos_2(){
  var atual = document.getElementById("prop2").value;
  if(atual > 0) { //evita números negativos
    var novo = atual - 1;
    document.getElementById("prop2").value = novo;
  }
}


function mais_1(){
  var atual = document.getElementById("prop1").value;
  var novo = atual - (-1); //Evitando Concatenacoes
  document.getElementById("prop1").value = novo;
}

function menos_1(){
  var atual = document.getElementById("prop1").value;
  if(atual > 0) { //evita números negativos
    var novo = atual - 1;
    document.getElementById("prop1").value = novo;
  }
}