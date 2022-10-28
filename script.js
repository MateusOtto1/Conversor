let tempentrada = document.querySelector('#tempentrada');
let caixa = document.querySelector('.caixa');
let tempC = document.querySelector('#tempC');
let tempF = document.querySelector('#tempF');
let tempR = document.querySelector('#tempR');
let tempK = document.querySelector('#tempK');

let resultadoC = document.querySelector('#resultadoC');
let resultadoF = document.querySelector('#resultadoF');
let resultadoR = document.querySelector('#resultadoR');
let resultadoK = document.querySelector('#resultadoK');

tempC.addEventListener('click', function(){

    let resultC = parseInt(tempentrada.value);
    resultadoC.innerHTML = resultC;
    resultadoF.innerHTML = ((resultC*9/5) + 32).toFixed(2);
    resultadoR.innerHTML = (((resultC+273.15)*9)/5).toFixed(2);
    resultadoK.innerHTML = (resultC+273.15).toFixed(2)
})

tempF.addEventListener('click', function(){

    let resultF = parseInt(tempentrada.value);
    resultadoF.innerHTML = resultF;
    resultadoC.innerHTML = ((resultF-32)*5/9).toFixed(2);
    resultadoR.innerHTML = (resultF+459).toFixed(2);
    resultadoK.innerHTML = (((resultF-32)*5/9)+273.15).toFixed(2);
})

tempR.addEventListener('click', function(){

    let resultR = parseInt(tempentrada.value);
    resultadoC.innerHTML = ((resultR-491.67)*5/9).toFixed(2);
    resultadoF.innerHTML = (resultR-459.67).toFixed(2);
    resultadoR.innerHTML = resultR;
    resultadoK.innerHTML = (resultR*5/9).toFixed(2);
})

tempK.addEventListener('click', function(){

    let resultK = parseInt(tempentrada.value);
    resultadoC.innerHTML = (resultK-273.15).toFixed(2);
    resultadoF.innerHTML = ((resultK-273.15)*9/5+32).toFixed(2);
    resultadoR.innerHTML = (resultK*1.8).toFixed(2);
    resultadoK.innerHTML = resultK;
})

let limpar = document.querySelector('#limpar');

limpar.addEventListener('click', function(){
    document.getElementById('tempentrada').value = '';
    resultadoC.innerHTML = '';
    resultadoF.innerHTML = '';
    resultadoR.innerHTML = '';
    resultadoK.innerHTML = '';
})