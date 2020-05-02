var socket = io();
//los eventos "on" escuchan, los eventos "emit" hablan.
socket.on('connect',function(){
    console.log('conectado con el servidor');
});
socket.on('disconnect',function(){
    console.log('Usuario desconectado');
});
socket.emit(
    'enviarMsg',
    {usuario:'rick',mensaje:'hola'},
    function confirmacion (params) {
        console.log({params});
    }
);

socket.on('enviarMsg',function(data){
    console.log({data});
});