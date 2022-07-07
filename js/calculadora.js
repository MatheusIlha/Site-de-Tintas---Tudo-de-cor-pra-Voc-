const janela = 2.4;
const porta = 1.52;
var lata18Litros = 0;
var lata3_6Litros = 0;
var lata2_5Litros = 0;
var lata0_5Litros = 0;
    
var botaoCalcular = document.querySelector("#calcular");

botaoCalcular.addEventListener("click", function(event){
     event.preventDefault();
       
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


    console.log(`A quantidade de tinta para a Area a ser Pintada é de ${quantidadeDeTinta} Litros`)

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
    

   
    console.log(`O total de janelas é de ${totalJanela} m²`);
    console.log(`O total de Portas é de ${totalPorta} m²`);
    console.log(`O total de Aberturas é de ${totalAberturas} m²`);
    console.log(`O total da Parede 1 é de ${totalParede1} m²`);
    console.log(`O total da Parede 2 é de ${totalParede2} m²`);
    console.log(`O total da Parede 3 é de ${totalParede3} m²`);
    console.log(`O total da Parede 4 é de ${totalParede4} m²`);
    console.log(`O total de Todas as Paredes é de ${totalDas4Paredes} m²`);
    console.log(`O total da Area a ser Pintada é de ${areaTotalPintura} m²`);
    
   
   
    console.log(`A quantidade de tinta é ${lata18Litros} latas de 18 litros`);
    console.log(`A quantidade de tinta é ${lata3_6Litros} latas de 3,6 litros`);
    console.log(`A quantidade de tinta é ${lata2_5Litros} latas de 2,5 litros`);
    console.log(`A quantidade de tinta é ${lata0_5Litros} latas de 0.5 litros`);

    console.log(`A quantidade de tinta para a Area a ser Pintada é de ${quantidadeDeTinta} Litros`)
    
});

