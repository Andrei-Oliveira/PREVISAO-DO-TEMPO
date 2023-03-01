

let chave= "1a071b1c4fdb03e71591db9e2310b199"

function colocaNaTela(dados){
    console.log (dados)
document.querySelector (".cidade") .innerHTML = "Tempo em " + dados.name 
document.querySelector (".temp") .innerHTML = Math.floor (dados.main.temp) + "°C Neste Momento"
document.querySelector (".descricao").innerHTML = dados.weather[0].description
document.querySelector (".umidade") .innerHTML = "umidade " + dados.main.humidity + "%"
document.querySelector  (".icone") .src ="https://openweathermap.org/img/wn/" +dados.weather [0].icon +".png"
document.querySelector (".temperatura1").innerHTML = Math.floor (dados.main.temp_max) + " °Max "
document.querySelector (".temperatura2").innerHTML = Math.floor (dados.main.temp_min) + " °Mim"
}
async function buscarCidade(cidade) {
  let dados= await fetch("https://api.openweathermap.org/data/2.5/weather?q=" +cidade+ "&appid=" + chave + 
"&lang=pt_br" + "&units=metric")

  .then (resposta => resposta.json ())
  

  colocaNaTela (dados)
  console.log(dados)
}



function cliqueiNoBotao () {

   let cidade = document.querySelector (".input-cidade").value

 buscarCidade(cidade)
}