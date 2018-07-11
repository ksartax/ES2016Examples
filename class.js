// class Task {
//     constructor() {
//         console.log("Construktor");
//     }
// }

// let newClass = class Task {
//     constructor() {
//         console.log("Construktor");
//     }
// }
// new newClass(); // Construktor


// class TeseEx {
//     constructor() {
//         console.log("Construktor TeseEx");
//     }
// }

// class Tese extends TeseEx {
//     constructor() {
//         super(); // Construktor TeseEx
//         console.log("Construktor Tese");
//     }
// }

// new Tese(); // Construktor TeseEx \n Construktor Tese


// let project = {
//     getTaskCount() { return 50; }
// }

// let sProject = {
//     getTaskCount() { return super.getTaskCount() + 1 }
// }

// Object.setPrototypeOf(sProject, project);
// console.log(sProject.getTaskCount()); // 51


// class TeseProperty {
//     constructor() {
//         this.location = "Poland";
//     }
// }

// class TesePropertyE extends TeseProperty {
//     constructor() {
//         super();
//         this.location = this.location + " PL";
//     }
// }

// console.log(new TesePropertyE().location); // Poland PL

// class PStatic {
//     static getDefault() {
//         return 0;
//     }
// }
// console.log(PStatic.getDefault()) // 0
// new PStatic().getDefault() // error

// class PStatic {
// }
// PStatic.id = 99;
// console.log(PStatic.id); // 99


// class PNtarget {
//     constructor() {
//         console.log(new.target.getDefault());
//     }
// }

// class PNtargetEx extends PNtarget{
//     static getDefault() {
//         return 9;
//     }
// }
// new PNtargetEx(); // 9