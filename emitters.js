import { EventEmitter } from 'node:events';

const myEE = new EventEmitter();

const callbackOn1 = () => console.log(`Hello from eventOn !`);
myEE.on('eventOn', callbackOn1);

const callbackOn2 = (arg1, arg2) =>
    console.log(`2 params from eventOn ${arg1}, ${arg2}`);
myEE.on('eventOn', callbackOn2);

const callbackOn3 = (...args) => {
    const params = args.join(', ');
    console.log(`All params from eventOn ${params}`)
};
myEE.on('eventOn', callbackOn3);

const callbackPrep1 = () => console.log(`Hello from eventPrep !`);
myEE.prependListener('eventPrep', callbackPrep1);

const callbackPrep2 = (arg1, arg2) =>
    console.log(`2 params from eventPrep ${arg1}, ${arg2}`);
myEE.prependListener('eventPrep', callbackPrep2);

const callbackPrep3 = (...args) => {
    const params = args.join(', ');
    console.log(`All params from eventPrep ${params}`)
};
myEE.prependListener('eventPrep', callbackPrep3);


myEE.emit('eventPrep', 7, 8, 9, 10);
myEE.emit('eventOn', 1, 2, 3, 4, 5, 6);

myEE.removeListener('eventOn', callbackOn1);
myEE.removeListener('eventOn', callbackOn2);
myEE.removeListener('eventOn', callbackOn3);
myEE.removeListener('eventPrep', callbackPrep1);
myEE.removeListener('eventPrep', callbackPrep2);
myEE.removeListener('eventPrep', callbackPrep3);

// You need to have this script in your package.json :
// "main": "index.js", because of import method.
// In this project package.json file in included