var socket = io();

// Los on son para escuchar

socket.on('connect', function() {
    console.log('conectado al servidor');
})

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
})


//  Los emit son para enviar informacion 
socket.emit('enviarMensaje', {
        usuario: 'jose',
        mesaje: 'hola mundo'
    },
    function(resp) {
        console.log('Respuesta Server: ', resp);
    })

// escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('servidor: ', mensaje);
})