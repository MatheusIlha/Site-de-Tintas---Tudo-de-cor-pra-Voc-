/* Mascaras para Letras minusculas no email */

function mini(){
    var x = document.getElementById("email");
    x.value = x.value.toLowerCase();
}
/*
function checaCPFRepetido(cpf){
  const valoresRepetidos = [
      '00000000000',
      '11111111111',
      '22222222222',
      '33333333333',
      '44444444444',
      '55555555555',
      '66666666666',
      '77777777777',
      '88888888888',
      '99999999999'
  ]
  let cpfValido = true

  valoresRepetidos.forEach(valor => {
      if(valor == cpf){
          cpfValido = false
      }
  })

  return cpfValido

  function checaEstruturaCPF(cpf){
      const multiplicador = 10

      return checaDigitoVerificador(cpf, multiplicador)
  }

  function checaDigitoVerificador(cpf, multiplicador){
      if(multiplicador >= 12 ){
          return true    
      }
    }
    */