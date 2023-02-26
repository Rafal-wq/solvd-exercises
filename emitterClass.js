class EventEmitter {
    listeners = {}

    addListenerPrependListener(eventName, fn) {
        this.listeners[eventName] = this.listeners[eventName] || [];
        this.listeners[eventName].unshift(fn);
    }

    prependListener(eventName, fn) {
        return this.addListenerPrependListener(eventName, fn)
    }

    addListenerOn(eventName, fn) {
        this.listeners[eventName] = this.listeners[eventName] || [];
        this.listeners[eventName].push(fn);
        return this;
    }
    on(eventName, fn) {
        return this.addListenerOn(eventName, fn)
    }

    removeListener (eventName, fn) {
        let lis = this.listeners[eventName];
        if (!lis) return this;
        for (let i = lis.length; i > 0 ; i--) {
            if (lis[i] === fn) {
                lis.splice(i, 1);
                break;
            }
        }
        return this;
    }

    emit(eventName, ...args) {
        let fns = this.listeners[eventName];
        if (!fns) return false;
        fns.forEach((f) => {
            f(...args);
        });
        return true;
    }
}

const myEmitter = new EventEmitter();

function callback1() {
    console.log('An event has occurred!');
}

function callback2() {
    console.log('An prependEvent has occurred!')
}

myEmitter.on('eventOne', callback1);
myEmitter.emit('eventOne');

myEmitter.prependListener('prependEvent', callback2);
myEmitter.emit('prependEvent');

myEmitter.removeListener('eventOne', callback1);
myEmitter.removeListener('prependEvent', callback2);