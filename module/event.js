const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('event', function () {
    console.log('Un evento ha ocurrido...');
});

emitter.emit('event'); // el nombre del evento debe ser igual al que se pasa en el método 'on'

emitter.on('eventWithArguments', function (arg) {
    console.log('Un evento con los siguientes argumentos ha ocurrido: ' + arg.id + ' ' + arg.numero);
});

emitter.emit('eventWithArguments', { id: 1, numero: 123 });

emitter.on('eventArrow', (arg) => {
    console.log('Un evento FLECHA con los siguientes argumentos ha ocurrido: ' + arg.id + ' ' + arg.numero);
});

emitter.emit('eventArrow', { id: 1, numero: 123 });