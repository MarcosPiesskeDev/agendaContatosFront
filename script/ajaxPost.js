
function showC() {
    location.replace("../templates/contactList.html");
}

function backIndex(){
    location.replace('../index.html');
}

function sendData(){

var url = 'http://localhost:8080/contacts';

    var json = {
        firstName: document.querySelector('input[id=fNameC]').value,
        lastName: document.querySelector('input[id=lNameC]').value,
        email: document.querySelector('input[id=emailC]').value,
        telephone: document.querySelector('input[id=telC]').value
    };

    var header = {
            method: 'POST',
            contentType: 'json',
            mode: 'cors',
            cache: 'default',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
            body: JSON.stringify(json)
        };

    fetch(url, header)
    .then(function(resolve){
        if(resolve.status == 200){
            alert('Contato Salvo com sucesso! :D');
        }else{
            alert('Houve um problema em salvar :( \n Tente novamente!');
        } 
        console.log(resolve.status);  //Prometeu :D
    }, 
    function(reject){ 
        console.log(reject); //Quebrou a promessa :(
    });       
    document.getElementById('fNameC').value = ""; //Resetando os campos do formulário || Reset fields of form 
    document.getElementById('lNameC').value = "";
    document.getElementById('emailC').value = "";
    document.getElementById('telC').value = "";
}


