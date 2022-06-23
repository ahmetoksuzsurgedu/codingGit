let instance;
let counter = 0;    // let counter = 0;

export default class Counter{  // class Counter {
    constructor(){
        if (instance) {
            throw new Error("You can only create one instance!");
        }
        instance = this;
    }   
    getInstance(){
        return this;
    }    //     getInstance(){
        //         return this;
        //     }
    getCount(){
        return counter;
    }    //     getCount(){
        //         return counter;
        //     }
    increment() {
        return ++counter;
    }    //     increment(){
        //         return ++counter;
        //     }
    decrement() {
        return --counter;
    }    //     decrement(){
        //         return --counter
        //     }
        // }
}

    const counter1 = new Counter();    // const counter1 = new Counter();
    const counter2 = new Counter();    // const counter2 = new Counter();

        // console.log(counter1.getInstance() === counter2.getInstance()); //false
// Error: You can only create one instance!