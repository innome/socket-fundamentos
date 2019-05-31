const { io } = require('../server')


io.on('connection', (client) => {
    console.log('usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a la aplicacion'
    })




    client.on('disconnect', () => {
        console.log('usuario desconectado');
    })

    // Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data)


        // if (mensaje.usuario) {

        //     callback({
        //         resp: 'Todo Salio Bien'
        //     });
        // } else {
        //     callback({
        //         resp: 'Todo salio mal'
        //     })
        // }
    })

})