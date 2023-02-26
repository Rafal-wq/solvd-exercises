function debounce(func, wait) {
    let timeout
    return function(...args) {
        const context = this
        clearTimeout(timeout)
        timeout = setTimeout(() => func.apply(context, args), wait)
    }
}

function sayHello() {
    console.log('Hello everyone, my name is', this.name)
}

const rafael = {
    name: 'rafael',
    speak: debounce(sayHello, 1000),
}

rafael.speak()