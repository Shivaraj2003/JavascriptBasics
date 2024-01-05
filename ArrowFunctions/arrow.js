//Arrow function don't use Function keyword

//Before Arrow:

 hello = function() {
    return "Hello World!";
}
console.log(hello())

//After arrow:
hello = () =>{
    return "Hello Arrow World!";
}
console.log(hello())

//Too short

hello = () =>"Good Day arrow";
console.log(hello())

//with params

hello = (val) => "hello "+val;
console.log(hello('Ram'))