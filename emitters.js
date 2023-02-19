import { EventEmitter } from 'node:events';

const myEE = new EventEmitter();

myEE.on('event1', () => console.log('event 1'));
myEE.on('event2', () => console.log('event 2'));
myEE.on('event3', () => console.log('event 3'));
myEE.prependListener('event6', () => console.log('event6'));
myEE.prependListener('event5', () => console.log('event5'));
myEE.prependListener('event4', () => console.log('event4'));

myEE.emit('event1');
myEE.emit('event1');
myEE.emit('event2');
myEE.emit('event2');
myEE.emit('event2');
myEE.emit('event3');
myEE.emit('event3');
myEE.emit('event4');
myEE.emit('event5');
myEE.emit('event6');
myEE.emit('event6');
myEE.emit('event6');
myEE.emit('event6');

myEE.removeListener('event1', () => console.log('event 1'));
myEE.removeListener('event1', () => console.log('event 1'));
myEE.removeListener('event1', () => console.log('event 1'));
myEE.removeListener('event1', () => console.log('event 1'));
myEE.removeListener('event1', () => console.log('event 1'));
myEE.removeListener('event1', () => console.log('event 1'));

// You need to have this script in your package.json :
// "main": "index.js", because of import method.
// In this project package.json file in included