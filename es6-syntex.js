// let - zmienna instancyjna, const stała instancyjna
const aesConst = 1;
let aesLet = 2;
var aesVar = 3;

function aesTestFunc() {
    let aesLet_ = 3;
    const aesConst_ = 3;

    console.log(aesLet_); //=> 3
    console.log(aesConst_); //=> 3
};
aesTestFunc();

console.log(aesConst); //=> 1
console.log(aesLet); //=> 2


//arrow function

var aFunction = () => 2;
console.log(aFunction()); //=> 2

var aFunction_1 = id => id;
console.log(aFunction_1(2)); //=> 2

var aFunction_2 = (id, id2) => id + id2;
console.log(aFunction_2(2, 2)); //=> 4

var aFunction_3 = id => {
    console.log(id); 
};
aFunction_3(1); // => 1

var aObject = {
    name: "Damian",
    process: function() {
        console.log(this); //aObject
    }
}
aObject.process();

var aObject_2 = {
    name: "Damian",
    process: function() {
        console.log(this.aesVar); //undefined
    }
}
aObject_2.process();

var aObject_3 = {
    name: "Damian",
    process: () => {
        console.log(this); //window
    }
}
aObject_3.process();

var aObject_4 = {
    name: "Damian",
    process: () => {
        console.log(this.aesVar); //3
    }
}
aObject_4.process();


//default function

var dFunction = (a = 1, b = 2, c = a + b) => {
    console.log(a);
    console.log(b);
    console.log(c);
};
dFunction(undefined, 3); //a => 1, b => 3, c => 4

let f = 1;
var dFunction_1 = (a = 1, b = 2, c = a + b + f) => {
    console.log(c);
};
dFunction_1(undefined, 3); //a => 1, b => 3, c => 5

var dFunction_2 = (a = 1, b = 2, c = a + b + function() {return 1}()) => {
    console.log(c);
};
dFunction_2(undefined, 3); //a => 1, b => 3, c => 5

var dFunction_3_1 = () => 1;
var dFunction_3 = (a = 1, b = 2, c = a + b + dFunction_3_1()) => {
    console.log(c);
};
dFunction_3(undefined, 3); //a => 1, b => 3, c => 5


//rest ...array and spread ...array

    //rest
function rTest(...imiona) {
    console.log(imiona);
}
rTest('Adam', 'Maciek'); // imiona => ['Adam', 'Maciek']
rTest(...[1, 2, 3, 4]); // imiona => [1, 2, 3, 4]

    //Spread
console.log(...['Seba', 'Maciek']); // Seba Maciek
console.log([,,]); // undefined, undefined


//Object literal extensions
var olePrice = 5;
var oleObject = {
    olePrice
}
console.log(oleObject); // { oldPrice: 5 }

var oleObject_1 = {
    olePrice: 1,
    calculate() {
        console.log(this.olePrice);
    }
}
oleObject_1.calculate() // 1

var oleObject_2 = {
    olePrice: 1,
    calculate: () => {
        console.log(this.olePrice);
    },
    "calc xd"() {
        console.log('calc xd');
    }
}
oleObject_2.calculate() // 5
oleObject_2["calc xd"](); // calc xd

    //dynamic field
var field = 'test';
var oleObject_3 = {
    [field]: 1,
}
console.log(oleObject_3); // { test: 1 }


// for of loops
for (id of [1, 2, 3, 4]) {
    console.log(id);
}


//template literals
console.log(`id: ${olePrice}`); // 'id: 5'


//destructuring
let dids = [1, 2, 3, 4];
let [nr1, nr2, nr3, nr4] = dids;
console.log(nr2); // 2

let dids_o = {d_id: 1, d_id2: 2};
let {d_id, d_id2} = dids_o;
console.log(d_id); // 1