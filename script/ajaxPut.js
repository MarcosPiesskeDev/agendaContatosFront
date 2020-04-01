
function putMethod(){
    
    var url = "http://localhost:8080/contacts";
    
    var contactData = {
        id: document.querySelector('input[id=getIdDom]').value,
        firstName: document.querySelector('input[id=fNameC]').value,
        lastName: document.querySelector('input[id=lNameC]').value,
        email: document.querySelector('input[id=emailC]').value,
        telephone: document.querySelector('input[id=telC]').value
    };

    var header = {
            method: 'PUT',
            contentType: 'json',
            mode: 'cors',
            cache: 'default',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
            body: JSON.stringify(contactData)
    };
        fetch(url, header)
        .then(() => {
        window.location.reload();
    }).catch(error => {
        console.error(error)
    })
}