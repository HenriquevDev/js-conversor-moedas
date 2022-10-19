function ConverterDeDolarParaReal(){
let ValorEmDolar = document.getElementById("valor").value
let valorConvertido = ValorEmDolar * 5.3
document.getElementById("valorConvertido").innerText = 
valorConvertido.toFixed(2)
}
