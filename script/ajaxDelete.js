function backIndex(){
    location.replace('../templates/index.html');
}

function deleteById(){

    var url = 'http://localhost:8080/contacts'; 
    var getId = document.querySelector('input[id=idToDelete]').value;
    
    var header = {
            method: 'DELETE',
            mode: 'cors',
            cache: 'default',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                }
    };

    fetch(url+'/'+getId, header)
    .then(function(resolve){
        console.log(resolve); //Prometeu! :D
        window.location.reload();
    },
    function(reject){
        console.log(reject); //Quebrou a promessa :(
    });
}

