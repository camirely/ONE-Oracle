function encryptText() {
  let inputText = document.getElementById('inputText').value;
  if(inputText==""){
    return alert('Ingrese algun caracter');
  }else{
  //se puede agregar la letra que desee
  var letras = "áéíóúñ-_?¿+*<>";
  for (var i in letras){
    if (inputText==letras[i]){
    return alert('Ingrese solo letras sin acento o caracteres especiales');
   }
  }
  if (inputText===inputText.toUpperCase()){
      return alert('Ingrese solo letras mayusculas o numeros');
    }else{
    let encryptedText = inputText.replace(/e/g, 'enter')
                                 .replace(/i/g, 'imes')
                                 .replace(/a/g, 'ai')
                                 .replace(/o/g, 'ober')
                                 .replace(/u/g, 'ufat');
    document.getElementById('outputText').value = encryptedText;
    }
  }
}

function decryptText() {
    let inputText = document.getElementById('inputText').value;
    let decryptedText = inputText.replace(/enter/g, 'e')
                                 .replace(/imes/g, 'i')
                                 .replace(/ai/g, 'a')
                                 .replace(/ober/g, 'o')
                                 .replace(/ufat/g, 'u');
    document.getElementById('outputText').value = decryptedText;
}

function copyText() {
    let outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}
