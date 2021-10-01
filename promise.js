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


// Callbacks
// (A callback is a function passed as an argument to another function)

function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(5, 5, myDisplayer);

/* Here, we can control which function is executed second from the
first function by passing in the second function as an argument. 
we can do this buy only calling one function outside of their definitions,
instead of two. */

// Asynchronicity




