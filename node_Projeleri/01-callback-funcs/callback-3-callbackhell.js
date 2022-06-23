function asenkronFunc(result,callback) {
    console.log(result);
    callback();    
}

asenkronFunc(2,function(result) {
    console.log(result);
    asenkronFunc(4,function(result) {
        console.log(result);
        asenkronFunc(6,function(result) {
            console.log(result);
            asenkronFunc(8,function(result) {
                console.log(result);
            })
        })
    })
})