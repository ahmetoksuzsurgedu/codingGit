function sayName(text,callback) {
    console.log(text);
    callback();
}

function saySurname() {
    console.log(" Surname");    
}

sayName("Nefise", saySurname);




/* bunu fonksiyon icinde funksiyon olarak cagiralim. CALLBACK yapalim
function sayName(text) {
    console.log(text);
}

function saySurname() {
    console.log(" Surname");    
}

sayName("Nefise");
saySurname();

*/