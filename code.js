// // helloWorld function
function helloWorld(){
    return "Hello, World!";
}
helloWorld();


function sayHello(input){
    if (input === true || input === false  ){
    return "Hello, World!"
    }else {
        return "Hello, " + input + "!";
    }
}
console.log( sayHello("Jane"));


function isFive (input){
    if(input >= 5){
        // return input + " is five."
        return true;
    }else{
        // return input + " is not five."
        return false;
    }
}
console.log(isFive(4));

function isEven (input){
    if(input %2 === 0){
        return true;
    }else{
        return false;
    }
};
console.log(isEven(0));