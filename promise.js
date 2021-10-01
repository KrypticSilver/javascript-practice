// Standard Promise

let myPromise = new Promise(function(myResolve, myReject) {
    const success = true;

    if (success == true) {
        myResolve("Good!");

    } else {
        myReject("Bad :(");
    }
    
});

myPromise.then(
    function(value) {console.log(value);},
    function(error) {console.log(error);}
);

// Callbacks using promises
// (A callback is a function passed as an argument to another function)


