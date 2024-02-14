function sum(a,b)
{
    return a+b;
}

function callback(fx,a,b)
{
    return fx(a,b)
}

console.log(callback(sum,2,3))