initialConditions();

function initialConditions(){
    document.getElementById('multilinea').innerHTML = 'Escriba su texto aquí...';
    document.getElementById('container__output__noneTextMessage').style.display = 'flex';
    document.getElementById('container__output__encriptedTextMessage').style.display = 'none';
}

function encrypt(){
    let text = document.getElementById('multilinea').value;
    let encryptedText = "";
    for (let i = 0; i<text.length; i++ ) {
        if(text[i]=='a'){
            encryptedText = encryptedText + 'ai';
        } else if(text[i]=='e'){
            encryptedText = encryptedText + 'enter';
        } else if(text[i]=='i'){
            encryptedText = encryptedText + 'imes';
        } else if(text[i]=='o'){
            encryptedText = encryptedText + 'ober';
        } else if(text[i]=='u'){
            encryptedText = encryptedText + 'ufat';
        } else {
            encryptedText = encryptedText + text[i];
        }
    }
    document.getElementById('container__output__noneTextMessage').style.display = 'none';
    document.getElementById('container__output__encriptedTextMessage').style.display = 'flex';
    document.getElementById('encripted-text').innerHTML = encryptedText;
    
}

