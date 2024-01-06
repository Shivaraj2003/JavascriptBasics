
function outer(){
    var  b = 20

    return function inner(){
        console.log(b);
        b=b+1;
    }
    
}

var z = outer();

console.log(z)
z();
z();