function habilitarBoton(){
    var name = document.getElementById('name').value;
    var lastName = document.getElementById('lastName').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;
    var validaciones = 0;

    if(name == "" || lastName == "" || phone == "" || message == ""){
        validaciones++;
    }
    if(validaciones == 0){
        document.getElementById('botonEnviar').disabled = false;
    } else {
        document.getElementById('botonEnviar').disabled = true;
    }
}

document.getElementById('name').addEventListener('keyup', habilitarBoton);
document.getElementById('lastName').addEventListener('keyup', habilitarBoton);
document.getElementById('phone').addEventListener('keyup', habilitarBoton);
document.getElementById('message').addEventListener('keyup', habilitarBoton);
document.getElementById('botonEnviar').addEventListener('click', ()=>{
    event.preventDefault()
    document.getElementById('messageSent').innerHTML = "Mensaje enviado exitosamente! Nos contactaremos a la brevedad";
    alert("Gracias por tu consulta!");
});