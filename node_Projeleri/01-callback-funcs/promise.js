 const promiseFunc = (parametrem) => {
    return new Promise ((resolve,reject) =>
    {
        if (parametrem<10) {
        resolve('Promise Test. (resolve) ');            
        } else {
        reject('Promise Test. ( reject) ');            
        }
    }
    )
}
promiseFunc(9) //tek satir yaziyorsan return demeye gerek yok.
.then((item ) => {console.log(item); return 1;} )
.then((item2) => {console.log(item2); return 2;})
.then((item3) => {console.log(item3); return 3;})
.catch((error) => {console.log(error)})