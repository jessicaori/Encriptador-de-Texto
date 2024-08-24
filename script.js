initialConditions();

function initialConditions(){
    document.getElementById('multilinea').innerHTML = 'Escriba su texto aquí...';
    document.getElementById('container__output__noneTextMessage').style.display = 'flex';
    document.getElementById('container__output__encriptedTextMessage').style.display = 'none';
}

function encrypt(){
    let text = document.getElementById('multilinea').value;
    if(text == ''){
        document.getElementById('container__output__noneTextMessage').style.display = 'flex';
        document.getElementById('container__output__encriptedTextMessage').style.display = 'none';
    } else {
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
}

function decrypt(){
    let text = document.getElementById('multilinea').value;
    if(text == ''){
        document.getElementById('container__output__noneTextMessage').style.display = 'flex';
        document.getElementById('container__output__encriptedTextMessage').style.display = 'none';
    } else {
        text = text.replaceAll('ai','a');
        text = text.replaceAll('enter','e');
        text = text.replaceAll('imes','i');
        text = text.replaceAll('ober','o');
        text = text.replaceAll('ufat','u');
        document.getElementById('container__output__noneTextMessage').style.display = 'none';
        document.getElementById('container__output__encriptedTextMessage').style.display = 'flex';
        document.getElementById('encripted-text').innerHTML = text;
    }
}

function copy() {
    let text = document.getElementById('encripted-text').innerText;

    navigator.clipboard.writeText(text).then(function() {
        document.getElementById('copy').innerHTML = '¡Copiado!'
        document.getElementById('copy').style.backgroundColor = '#F3F5FC';
        setTimeout(() => {
            document.getElementById('copy').innerHTML = 'Copiar';
            document.getElementById('copy').style.backgroundColor = '#FFFFFF';
        }, 1000);
    }).catch(function(err) {
        alert('Error al copiar el texto: ', err);
    });
}

