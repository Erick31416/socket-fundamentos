const {io} = require('../server');

io.on('connection',(client)=>{
    console.log('Usuario conectado');

    client.on('disconnect',()=>{
        console.log('Se ha desconectado un usuario');
    });

    client.on('enviarMsg',(data,callback) => {

    // Solo para el cliente que disparo el evento
    //client.emit('enviarMsg',{usuario:'Server',msg:'Yo soy el Servidor'})
    //Para todos los clientes menos para el que disparoó el evento.
    client.broadcast.emit('enviarMsg',data);


    //    console.log({data});
    //    if(data.usuario){
    //        callback('todo ok');
    //    }else{
    //        callback('todo mal');
    //    }
    })

    client.emit('enviarMsg',{usuario:'Server',msg:'Yo soy el Servidor'})
});