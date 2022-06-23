const events = require ('events');

const eventEmitter = new events.EventEmitter();

eventEmitter.on('viewMessage', (text) => {
 // console.log('Hello World!!!',text);
  console.log(`Hello World!!! ${text}`);
});
const name="Nefise";
  eventEmitter.emit('viewMessage','Nefise');

/*    setInterval(() => {
    eventEmitter.emit('viewMessage')
}, 2000);*/