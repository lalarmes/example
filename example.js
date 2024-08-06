let primeiroNome = "Geciel"
let ultimoNome = "Schwinden"
let nomeCompleto = primeiroNome + " " + ultimoNome

console.log(nomeCompleto)

let numero1 = 10
let numero2 = 20

//

let soma = numero1 + numero2
let subtracao = numero1 - numero2
let multiplicacao = numero1 * numero2
let divisao = numero1 / numero2

console.log(soma, subtracao, divisao, multiplicacao)

//trabalhando com booleano

let estaChovendo = true
if(estaChovendo){
    console.log("Está chovendo!")
}else{
    console.log("Não está chovendo")
}

//uso de Null e Undefined

let resposta = null
let nota

console.log(resposta, nota)

//utilizando symbol

let idUnico = Symbol()

let produto = {
    {idUnico}: 1234
}

console.log(produto{idUnico})

//trabalhando com bigInt

let grandeInteiro = BigInt("1234567890123456789012345678901234567890")
let numero = 1234567890123456789012345678901234567890
let numero3 = grandeInteiro
console.log(grandeInteiro)
console.log(numero)
console.log(numero3)
