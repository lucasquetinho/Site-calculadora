//Função de calculos 
function Converter() {

//Defini todas as variáveis
const c = Number(document.querySelector("#celsius").value); // Graus celsius
const k = Number(document.querySelector("#kelvin").value); // Graus kelvin
const f = Number(document.querySelector("#fahrenheit").value); // Graus fahrenheit

const resultadoC = 1 * c;
const resultadoK = 1 * k;
const resultadoF = 1 * f;

document.querySelector("#ResultadoGrausCelcius").textContent = "Resultado graus celcius: " + resultadoC.toFixed(2);
document.querySelector("#ResultadoGrausKelvin").textContent = "Resultado graus kelvin:" + resultadoK.toFixed(2);
document.querySelector("#ResultadoGrausFahrenheit").textContent = "Resultado graus fahrenheit: " + resultadoF.toFixed(2);
}

//Funções do botão
document.addEventListener("DOMContentLoaded", () => {
    const ConverterButton = document.querySelector("#Converter");
    ConverterButton.addEventListener("click", Converter);
});
