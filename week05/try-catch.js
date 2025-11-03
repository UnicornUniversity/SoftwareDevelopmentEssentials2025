let x = 100;

try{
    x = 200;
    throw new Error("My fake error");
}
catch(exc) {
    console.log(exc);
}
finally {
    x = 300;
}

console.log(x);
