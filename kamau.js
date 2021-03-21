sum() //sloppy mode

function sum() {
    "use strict";
    a = 3;
    b = 2;
    c = a + b;
    console.log(c);
}

function foo() {
    "use strict";

    function bar() {
        //code block;
    }
}
//
var a = 10;

function sum() {
    var b = 4;
    var c = a + b;
    console.log(c);
}
sum();
var k = 20;
if (k % 2 == 0) {
    console.log("k is a letter");
} else {
    ("k is a number");
}