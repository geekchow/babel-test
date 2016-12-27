import A from './A.js';
// import Bork from './B.js';

// const a = () => 'Hi, Babel';

// const b = Object.assign({name: 'phil'}, {age: 20});

const A1 = new A();
// const Bork1 = new Bork();

var a = new Promise((resolve, reject) => {
    resolve(1);
})

a
.then((result) => {console.log(result);})
.catch((error) => {console.log(error);});

var b = undefined;