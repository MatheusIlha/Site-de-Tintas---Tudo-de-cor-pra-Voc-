/* Mascaras para Letras minusculas no email */

function mini(){
    var x = document.getElementById("email");
    x.value = x.value.toLowerCase();
}

function validaNome() {
    value = document.getElementById("nome").value;
    re = /^[a-zA-ZéúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ\-\ \s]+$/;
    if (re.test(value)) {
      document.troca.submit();
    } else {
      alert('Nome Inválido');
      form.nome.focus();
      return false;
    }
  }
