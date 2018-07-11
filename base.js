
// let article = {
//     [Symbol.for('article')]: 'Artyk' // Symbol['article']
// } 
// console.log(article[Symbol.for('article')]); // Artyk

// let Blog = function() {
// }
// Blob.prototype[Symbol.toStringTag] = "Blog Class";
// let blog = new Blob();
// console.log(blog.toString()); // Blog Class


// let a = { a: 1}, b = { b: 2};

// let target = {};
// Object.assign(target, a, b);
// console.log(target); // {a: 1, b: 2};


// let a = { a: 1}, b = { b: 2};
// Object.defineProperties(b, 'c', {
//     value: 10,
//     enumerable: false // jeśli chcemy by można było dołączyć przez assign to dajemy true
// });

// let target = {};
// Object.assign(target, a, b);
// console.log(target); // {a: 1, b: 2};


// let amount = NaN;
// console.log(amount == amount) // false   
// console.log(Object.is(amount, amount)) // true   


// let title = "S bas D";
// title.endsWith("D");
// title.startsWith("S");
// title.includes('ba');
// title.normalize();
// String.raw(`${1} \u{1f3c4}\n`) // 1 \u{1f3c4}\n

//emoji np \u{1f3c4}


// let s = 'Nan';
// console.log(isNaN(s)) // false
// console.log(Number.isNaN(s)) // true

// Number.MIN_SAFE_INTEGER


// Iterator
// let ids = [1, 2, 3, 4];
// let iter = ids[Symbol.iterator]();
// console.log(iter.next()); // Object { value: 1, done: false }

// let idsIterator = {
//     [Symbol.iterator]() {
//         let incrementIds = 1;
//         return {
//             next() {
//                 return {
//                     value: incrementIds++,
//                     done: false
//                 }
//             }
//         }
//     }
// }
//console.log(idsIterator[Symbol.iterator]().next()); //Object { value: 1, done: false }

// for (let id of idsIterator) {
//     if (id > 100) {
//         break;
//     }
//     console.log(id);
// }


//Generator
// function *process() {
//     yield 1;
//     yield 2;
//     yield 3;
// }

// function *process() {
//     while(true) {
//         yield(1);
//     }
// }

// function *process() {
//     let r = yield;
//     console.log(r); // 20
// }

// let i = process();
// i.next();
// i.next(20);

// for (let p of process()) {
//     console.log(p);
// }

// function *process() {
//     let rArray = [yield];
//     console.log(rArray[0]); // 20
// }

// let i = process();
// i.next();
// i.next(20);

// function *process() {
//     yield* [1, 2, 3]
// }

// let i = process();
// i.next(1);
// i.next(2);


//throw
// function *process() {
//     try {
//         yield 1;
//         yield 2;
//         yield 3;
//     }
//     catch(e) {

//     }
// }

// let i = process();
// i.next(1);
// i.throw("ss");
// i.return('foo'); //done and return foo


//promis
// Promise.reject("ss")
// Promise.all([p, p1]);
// Promise.race([p, p1]);


//Array
Array.of(100) // [100]
Array.from([100, 200], v => v + 100); // [200, 300]
Array.from([100, 200], function(v) { return v + this.sal}, {sal: 100}); // [200, 300]
[].fill(1); // -1 ok konca
[].find(v => v == 1); //1 wartosc
[].findIndex(function(v,i,a) {
    return v == this; // this to 700
}, 700)
[].copyWithing();
...[].keys();
...[].values();
...[].entries();

let emlp1 = {name: 1};

let empl = new Map([]);
empl.set(emlp1, "abc");
empl.get(emp1);// abc
empl.delete(emlp1);
empl.clear();
empl.has(emlp1);

new WeakMap();
// kasownie gdy traci ref przez garbage kolecjin
let s = new Set() // unikalne
s.add();
s.has();
new WeakSet();

class Per extends Array {
}


class Test {
    constructor() {
        this.id = 1;
    }
    show(s) {
        console.log(this.id);
    }
}

Reflect.apply(Test.prototype.show, {id: 10}, ['Damian']);

let setup = {
    getId() {return 99}
}
let t = new Test();
Reflect.setPrototypeOf(t, setup)
t.getId(); 

Reflect.get(t, 'id');
Reflect.set(t, 'id');
Reflect.has(t, 'id');
Reflect.ownKeys(t); // [id]

Reflect.defineProperty(r, 'id', {
    value: 200,
    configurable: true,
    enumerable: true
});
r['id'] // 200

Reflect.defineProperty(t, 'id');
Reflect.getOwnPropertyDescriptor(t, 'id');

Reflect.preventExtensions(t) // blokada dodawania t.mie = 10
Reflect.isExtensible(t) // czy mozna 

Reflect.construct(Test, []);

let c = new Proxy(t, {
    get: function(target, prop, receive) { // prop: t
        return Reflect.get(target, prop, receive);
    },
    apply: function(target, thisArg, argumentList) { // prop: t
        return Reflect.apply(target, thisArg, argumentList);
    } 
})
c.t; 

let {proxy, revoke} = new Proxy.revocable(t, {

});

proxy.id;
revoke();