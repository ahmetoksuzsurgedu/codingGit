const events = require('events');
const myEmitter = new events.EventEmitter();

console.log(__dirname,__filename)

let m = 0;
myEmitter.once('event', () => {
  console.log(++m);
});
//myEmitter.emit('event');
setInterval(() => {
    myEmitter.emit('event');
}, 1000);


/*
myEmitter.on('abc', (a, b) => {
  
  setImmediate(()=>{console.log(a, b, 'this happens asynchronously');})

});

myEmitter.emit('abc', 'a', 'b');*/