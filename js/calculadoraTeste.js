const janela = 2.4;
const porta = 1.52;
var lata18Litros = 0;
var lata3_6Litros = 0;
var lata2_5Litros = 0;
var lata0_5Litros = 0;
var areaTotalPintura = 0;
var altura1;
var largura1;

/*
if(validadores[tipoDeInput]) {
    validadores[tipoDeInput](input)
}
if(input.validity.valid) {
    input.parentElement.classList.remove('input-container--invalido')
    input.parentElement.querySelector('.mensagem-erro').innerHTML = ''
} else {
    input.parentElement.classList.add('input-container--invalido')
    input.parentElement.querySelector('.mensagem-erro').innerHTML = mostraMensagemDeErro(tipoDeInput, input)
}
*/

var botaoCalcular = document.querySelector("#calcular");
botaoCalcular.addEventListener("click", function(e){
    e.preventDefault(); 

    var form1 = document.querySelector("#form-adiciona");

    var alturaDigitada = form1.alturaParede1.value
    altura1 = parseFloat(alturaDigitada);
    var larguraDigitada = form1.larguraParede1.value
    largura1 = parseFloat(larguraDigitada);
    if(isNaN(altura1)&&(largura1))
    {
      console.log("não é valor OK")      
    }
    else{
      console.log("OK")
      validaParedeAltura1(altura1)
      validaParedeLargura1(largura1)
      //calculaArea(area);
    }
        console.log(altura1);
        console.log(largura1);
        //console.log(area);
})

function validaParedeAltura1() {
    var e1
    if(altura1 < 0){
        e1 = "Altura menor que 0"
        //return false;
    } else {
        e1 = "Altura maior que 0"
        //return true;
    }
    console.log(e1);
}

function validaParedeLargura1() {
    var e1
    if(largura1 < 0){
        e1 = "Largura menor que 0"
        //return false;
    } else {
        e1 = "Largura maior que 0"
        //return true;
    }
    console.log(e1);
}

function calculaAreaParede() {
    //Busca as informações no form do HTML
    var form = document.querySelector("#form-adiciona");
    
    var campoJanela = form.janela.value;
    var campoPorta = form.porta.value;

    var campoAlturaParede1 = form.alturaParede1.value
    var campoLarguraParede1 = form.larguraParede1.value

    var campoAlturaParede2 = form.alturaParede2.value
    var campoLarguraParede2 = form.larguraParede2.value

    var campoAlturaParede3 = form.alturaParede3.value
    var campoLarguraParede3 = form.larguraParede3.value

    var campoAlturaParede4 = form.alturaParede4.value
    var campoLarguraParede4 = form.larguraParede4.value
    
    
    alturaParede1 = parseFloat(campoAlturaParede1);
    larguraParede1 = parseFloat(campoLarguraParede1);

    alturaParede2 = parseFloat(campoAlturaParede2);
    larguraParede2 = parseFloat(campoAlturaParede2);

    alturaParede3 = parseFloat(campoAlturaParede3);
    larguraParede3 = parseFloat(campoAlturaParede3);

    alturaParede4 = parseFloat(campoAlturaParede4);
    larguraParede4 = parseFloat(campoAlturaParede4);
    
    
    // Variaveis que buscam o Resultado do HTML
    var resultado = document.getElementById("resultado");
    var resultado1 = document.getElementById("resultado1");
    var resultado2 = document.getElementById("resultado2");
    var resultado3 = document.getElementById("resultado3");
    var resultado4 = document.getElementById("resultado4");
    
    
    // Claculo em m²
    var totalJanela = campoJanela * janela;
    var totalPorta = campoPorta * porta;
    var totalAberturas = (totalJanela + totalPorta).toFixed(2);
    var totalParede1 = campoAlturaParede1 * campoLarguraParede1;
    var totalParede2 = campoAlturaParede2 * campoLarguraParede2;
    var totalParede3 = campoAlturaParede3 * campoLarguraParede3;
    var totalParede4 = campoAlturaParede4 * campoLarguraParede4;
    var totalDas4Paredes = totalParede1 + totalParede2 + totalParede3 + totalParede4;
    var areaTotalPintura = (totalDas4Paredes - totalAberturas).toFixed(2);
    var quantidadeDeTinta = areaTotalPintura / 5;
    const totalTinta = quantidadeDeTinta.toFixed(2);
        
        // Condicional campo vazio
        if(campoPorta == 0) {
            alert("Deve ter pelo menos 1 porta em uma das Paredes.")
        }
        // Condicional Altura e largura da Parede
        else if(totalParede1 < 1 || totalParede1 > 50){
            alert("O tamanho da Parede 1 deve ser Maior que 1m² e/ou Menor que 50m²")
        }else if(totalParede2 < 1 || totalParede2 > 50){
            alert("O tamanho da Parede 2 deve ser Maior que 1m² e/ou Menor que 50m²")
        }else if(totalParede3 < 1 || totalParede3 > 50){
            alert("O tamanho da Parede 3 deve ser Maior que 1m² e/ou Menor que 50m²")
        }else if(totalParede4 < 1 || totalParede4 > 50){
            alert("O tamanho da Parede 4 deve ser Maior que 1m² e/ou Menor que 50m²") 
        }
        // Condicional tamanho paredes/aberturas
        else if(totalDas4Paredes < totalAberturas * 2) {
            alert("O tamanho das aberturas é Maior que 50% da Parede.")
        }else {
            
         while(quantidadeDeTinta > 0){
            if(quantidadeDeTinta  >= 18){
                lata18Litros++;
                quantidadeDeTinta = quantidadeDeTinta - 18;
            }else if(quantidadeDeTinta >= 3.6){
                lata3_6Litros++;
                quantidadeDeTinta = quantidadeDeTinta - 3.6;  
            }else if(quantidadeDeTinta >= 2.5){
                lata2_5Litros++;
                quantidadeDeTinta = quantidadeDeTinta - 2.5;
            }else if(quantidadeDeTinta >= 0.5){
                lata0_5Litros++;
                quantidadeDeTinta = quantidadeDeTinta - 0.5;
            }else if(quantidadeDeTinta > 0){
                lata0_5Litros++;
                quantidadeDeTinta = 0;
            }   
        }
            if(lata0_5Litros == 5){
                lata2_5Litros++;
                lata0_5Litros = 0;
            }
        
        resultado.textContent = `Você irá precisar de ${totalTinta} Litros`;
        resultado1.textContent = `Você precisará de ${lata18Litros} Lata(s) de 18 Litros`;
        resultado2.textContent = `Você precisará de ${lata3_6Litros} Lata(s) de 3,6 Litros`;
        resultado3.textContent = `Você precisará de ${lata2_5Litros} Lata(s) de 2,5 Litros`;
        resultado4.textContent = `Você precisará de ${lata0_5Litros} Lata(s) de 0,5 Litros`;

        console.log(`O total das das aberturas é ${totalAberturas} m²`);
        console.log(`O total das 4 Paredes é ${totalDas4Paredes} m²`);
        console.log(`A Area total daPintura é ${areaTotalPintura} m²`);
        console.log(`O total de tinta é ${totalDas4Paredes} Litros`);
        console.log(`O total de tinta é ${totalTinta} m²`);
    }
}     
    


/*
botaoCalcular.addEventListener("click", function(event){
     event.preventDefault();  

     if(validaEntrada == true){
     console.log("Verificado o Numero");
    }

});
*/
