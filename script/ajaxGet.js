function returnNC(){
  location.replace('../templates/newContact.html');
}

document.addEventListener("DOMContentLoaded", function(){

    var myList = document.querySelector('ul[id=listC]');
    var url = 'http://localhost:8080/api/contacts/list';
    fetch(url)
    .then(response => response.json())
    .then(function(data){
        data.forEach((user) => {
            const { id, firstName, lastName, email, telephone} = user
            myList.innerHTML += `<h5> ID Contato: ${id} </h5>
                <li> Nome : ${firstName}</li>
                <li> Sobrenome : ${lastName} </li>
                <li> E-mail : ${email} </li>
                <li> Telefone : ${telephone}</li>
                <hr>`;
          });
       console.log(data);
      }).catch(error => {
        console.error(error)
    })
});

function findContact(){

    var getId = document.querySelector('input[id=findC]').value;
    var url = 'http://localhost:8080/api/contacts/list/';
  
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

    fetch(url+getId, header)
    .then(response => response.json())
    .then(function(data)  {

      if(data == null){
          return window.alert("Não existe um contato com este id");
      }
      const { id, firstName, lastName, email, telephone} = data
      
      return document.querySelector('ul[id=findCId]')
      .innerHTML = `<h5> User ID: ${id} </h5>
          <li> Nome : ${firstName}</li>
          <li> Sobrenome : ${lastName} </li>
          <li> E-mail : ${email} </li>
          <li> Telefone : ${telephone}</li>
          <hr>`;
    }).catch(function(error){
        console.error(error);
  })
}
