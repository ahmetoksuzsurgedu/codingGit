function firstFunc(callback) {
setTimeout(() => {
    console.log("FIRST");
    callback();
}, 1000);
}


function secondFunc() {
    console.log("SECOND");

}

firstFunc(secondFunc);

/* firstFunc();
secondFunc(); */
