var a;
typeof a;
console.log(a);
a = "hello world";
console.log(a);
a = 42;
typeof a;
console.log(a);
a = true;
typeof a;
console.log(a);
a = null;
typeof a;
console.log(a);
a = undefined;
typeof a
console.log(a);
a = { b: "c" };
typeof a;
console.log(a);

function testTruthyFalsy(val) {
    return val ? console.log("truthy") : console.log("falsy");
}
testTruthyFalsy("");
var a = [1, 2, 3];
var b = "1,2,3";
console.log(a == b);


let sweets;

function setup() {
    sweets = new sweets();
    print(sweet.x, sweet.y);
}

class sweets {
    constructor() {
        this.x = 200;
        this.y = 150;
    }
}