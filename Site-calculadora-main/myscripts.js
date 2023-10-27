//Função de calculos 
function Converter () {

//Defini as constantes 
const c = Number(document.querySelector("#celsius").value); // Graus celsius
const k = Number(document.querySelector("#kelvin").value); // Graus kelvin
const f = Number(document.querySelector("#fahrenheit").value); // Graus fahrenheit

//Defini as constantes dos resultados apartir de cálculos
const resultadoC = c;
const resultadoK = c + 273;
const resultadoF = (c * 9/5) + 32;

//Escreve os resultados e os envia ao html
document.querySelector("#ResultadoGrausCelcius").textContent = "Resultado graus celcius: " + resultadoC.toFixed(2);
document.querySelector("#ResultadoGrausKelvin").textContent = "Resultado graus kelvin: " + resultadoK.toFixed(2);
document.querySelector("#ResultadoGrausFahrenheit").textContent = "Resultado graus fahrenheit: " + resultadoF.toFixed(2);
}

//Funções do botão
document.addEventListener("DOMContentLoaded", () => {
    const ConverterButton = document.querySelector("#Converter");
    ConverterButton.addEventListener("click", Converter);
});
