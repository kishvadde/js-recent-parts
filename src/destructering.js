let temp = getSomeRecords()

var first = temp[0]
var second = temp[1]

var firstName = first.name;
var firstEmail = first.email !== undefined?first.email : "default@email";

var secondName = second.name;
var secondEmail = second.email !== undefined?second.email : "default@email";

// can be written in destructring as

// It is actually a pattern not the value. Pattern to describe what kind of
// value we are expecting from the right hand side.
// take only first 2 elements-
var [
    {
        name: firstName, //if name property present assign its value to firstName
        email: firstEmail = "default@email" //if email property not present use default value
    },
    {
        name: secondName,
        email: secondEmail = "default@email"
    }
] = getSomeRecords();

// ex2

//normal way

function data(){
    return [1,2 3];
}


var tmp = data();
var first = tmp[0];
var second = tmp[1];
var third = tmp[2];

// Destructering way

var [first, second, thrid] = data();

// with [1,2] third will be undifined

// for [1. 2. 3. 4, 5]
var [a,b,c,...rest] = data();
// a,b,c, rest = 1, 2, 3, [4, 5]

// if [1.2 3] rest = []

//NOTE: ...rest should come always at the end of sequence

// if we want to have tmp and destructering both
//[1, 2, 3, 4]
var [a,b,c,d] = tmp = data();

// we can declare variables before using them in pattern

var tmp;
var a,b,c,d;
[a,b,c,d] = tmp = data(); // is valid

// we cam use array positions also in the pattern
 var arr = [];

[arr[0], arr[1], arr[2], ...arr[3]] = data();
// for [1,2,3,4,5] now arr = [1. 2, 3, [4,5]]

// we cam do samething with objects

var o = {};

[
    o.first,
    o.second,
    o.third
] = data();
// gives o={first:1, second:2, thitd:3}

// to ignore at specific positions

var [
    first,
    ,
    third,
    ...rest
] = data();


//swapping two elements
var x = 10;
var y = 20;

// destructering
[y,x] = [x, y]


//Paramer Arrays

function func([
    first,
    second,
    third
]) {
    //....
}

// If data() returns null or undefined

var [first, second, third] = data() //gives TypeError

var [first, second, third] = data() || []; //Valid way to do

// in function parameters

function func([
    first,
    second,
    third
] = []){
    //..
} // handles if null or undefined passed instead of an array

function func([
    first = 10,
    second = 20,
    third = 30
]){
    //...
} // with default values for the expected parameters

// If [1, [2,3], 4]

var [a, [b, c], d] = data()

// If [1, undefined, 4]

var [a, [b, c], d] = data() //Gives TypeError

var [a, [b, c]=[], d] // Use default

// Object Destructering

function data() {
    return {
        a: 1,
        b: 2,
        c: 3,
        d: 4
    }
}

var {
    b: second,
    a: first,
    ...third
} = data(); //Here the keys are source and values are targets

// It gives first=1, second=2 and third={c:3, d:4}

// default values
var {
    b: second,
    a: first = 10, //source: target = default
    ...third
} = data();

//if variable declared before
var second, first;

({
    second: b,
    first: a
} = data()) //should use () or declare with var, let or const

tmp = {second: b, first: a} = data() //is valid


// fallBack object for null or undefined case
var {
    b: second,
    a: first
} = data() || {};

//If we want to have variable name same as source

var {
    a = 20, // variable name same as source name and default value is 20
    b: second
} = data();

// if data returns {a:1, b:{c:3, d:4}}

var {
    a,
    b: {
        c,
        d
    } = {} //default value
} = data() || {} //default value


var o1 = {
    a: {
        c: 3
    }
};

var o2 = {
    a: {},
};

var o3 = {};

var {
    a: {
        b = 10,
        c = 20
    }
} = o1 //gives b=10,c=3

var {
    a: {
        b = 10,
        c = 20
    }
} = o2; //gives b = 10, c = 20

var {
    a: {
        b = 10,
        c = 20
    }
} = o3 //gives error as a is not fined in o3

var {
    a: {
        b = 10,
        c = 20
    } = {}
} = o3 //valid case b and c will be undefined

var {
    a: {
        b,
        c
    } = {
        b: 10,
        c: 20
    }
} = o1; // b = undefined and c = 3

var {
    a: {
        b,
        c
    } = {
        b: 10,
        c: 20
    }
} = o2; //b,c both will be undefined since a is present it won't take default object

var {
    a: {
        b,
        c
    } = {
        b: 10,
        c: 20
    }
} = o3; // b = 10, c = 20

//Parameter Destructering

function func({
    a,
    b
} = {} ){
}
