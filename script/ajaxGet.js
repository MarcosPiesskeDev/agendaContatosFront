function returnNC(){
  location.replace('../templates/newContact.html');
}

document.addEventListener("DOMContentLoaded", function(){

    var myList = document.querySelector('ul[id=listC]');
    var url = 'http://localhost:8080/contacts';
    fetch(url)
    .then(response => response.json())
    .then(function(data){
        data.forEach((user) => {
            const { id, firstName, lastName, email, telephone} = user
            myList.innerHTML += `<h5 style="color: white"> ID Contato: ${id} </h5>
                <li style="color: white"> Nome : ${firstName}</li>
                <p></p>
                <li style="color: white"> Sobrenome : ${lastName} </li>
                <p></p>
                <li style="color: white"> E-mail : ${email} </li>
                <p></p>
                <li style="color: white"> Telefone : ${telephone}</li>
                <hr>`;
          });
      }).catch(error => {
        console.error(error)
    })
});

function findContact(){

    var contendDiv = document.getElementById('showCByFind').style.display;
    if(contendDiv == "none"){
        document.getElementById('showCByFind').style.display = 'block';
    }else{
        document.getElementById('showCByFind').style.display = 'none';
    }

    var getId = document.querySelector('input[id=findC]').value;
    var url = 'http://localhost:8080/contacts';
    
    var header = {
      method: 'GET',
      contentType: 'json',
      mode: 'cors',
      cache: 'default',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
          }
  };

    fetch(url+'/'+getId, header)
    .then(response => response.json())
    .then(function(data)  {

      if(data == null){
          return window.alert("Não existe um contato com este id");
      }
      return document.querySelector('ul[id=findCId]')
      .innerHTML = `<h5>ID Contato: ${data.body.id} </h5>
          <li> Nome : ${data.body.firstName}</li>
          <p></p>
          <li> Sobrenome : ${data.body.lastName} </li>
          <p></p>
          <li> E-mail : ${data.body.email} </li>
          <p></p>
          <li> Telefone : ${data.body.telephone}</li>`; 
    }).catch(function(error){
        console.error(error);
  })
}
