const janela = 2.4;
const porta = 1.52;
var lata18Litros = 0;
var lata3_6Litros = 0;
var lata2_5Litros = 0;
var lata0_5Litros = 0;
var areaTotalPintura = 0;

function calculaAreaParede() {
    
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
    var resultado = document.getElementById("resultado");
    var resultado1 = document.getElementById("resultado1");
    var resultado2 = document.getElementById("resultado2");
    var resultado3 = document.getElementById("resultado3");
    var resultado4 = document.getElementById("resultado4");
    
    //if(janela !== " " && porta !== " " && alturaParede1 !== " " && larguraParede1 !== " " && 
    //alturaParede2 !== " " && larguraParede2 !== " " && alturaParede3 !== " " && larguraParede3 !== " " && 
    //alturaParede4 !== " " && larguraParede4 !== " ") {

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
        
        resultado.textContent = `O total de tinta é ${totalTinta} Litros`;
        resultado1.textContent = `Você precisará de ${lata18Litros} Lata(s) de 18 Litros`;
        resultado2.textContent = `Você precisará de ${lata3_6Litros} Lata(s) de 3,6 Litros`;
        resultado3.textContent = `Você precisará de ${lata2_5Litros} Lata(s) de 2,5 Litros`;
        resultado4.textContent = `Você precisará de ${lata0_5Litros} Lata(s) de 0,5 Litros`;
        
        // A area total de Pintura é ${areaTotalPintura}
        //A quantidade de Latas de Tintas de 18L é ${lata18Litros}
        //A quantidade de Latas de Tintas de 3,6L é ${lata3_6Litros}
        //A quantidade de Latas de Tintas de 2,5L é ${lata2_5Litros}
        //A quantidade de Latas de Tintas de 0,5L é ${lata0_5Litros}`;
        

         

         
    }    

    



var botaoCalcular = document.querySelector("#calcular");

botaoCalcular.addEventListener("click", function(event){
     event.preventDefault();  
});

