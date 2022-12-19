let promise = new Promise(function(resolve, reject){
    // resolve(); when successful
    // reject(); when error
});
promise.then(
    function(value){
        // code if successful
    },
    function(error){
        // code if some error
    }
);