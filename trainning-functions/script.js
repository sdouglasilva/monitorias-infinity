let botaoDeclaracao = document.getElementById("btn")
// function declaracao (e){
//   e.preventDefault()
//   let resultado1 = document.getElementById("resultado1")
//   let nome = document.getElementById("nome-um").value
//   let saudacao = document.getElementById("saudacao-um").value
//   resultado1.innerText = `Olá ${nome}, ${saudacao}`
//   console.log(nome)
//   console.log(saudacao)
// }

// botaoDeclaracao.addEventListener('click', declaracao) 


// const expressao = function(){

// }

// const arrow = ()=>{

// }

// (function(){ console.log("Função anonima"); })


let botaoDeCallBack = document.getElementById("btn5")

function capturarElemento(callback){
  let resultado5 = document.getElementById("resultado5")
  let nome = document.getElementById("nome-cinco").value
  let saudacao = document.getElementById("saudacao-cinco").value
  //passar os argumentos necessários para o callback
  callback(resultado5,nome,saudacao)

}

function alterarElemento(resultado5,nome,saudacao){
  resultado5.textContent = `Olá${nome},${saudacao}`

}

botaoDeCallBack.addEventListener('click',function(){
  capturarElemento(alterarElemento)
})

