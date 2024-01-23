// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

//local
const secret = 'SUPER SECRET';
//share
const john = 'john';
const peter = 'peter';

//console.log(module)

//whatever I dump in the exports I am gonna be able
//to access in the application

module.exports = {john,peter};

//Alternative way to export modules
// module.expoerts.items = ['item1','item2']
// const Person = {
//    name: 'bob',
// }
// module.exports.singlePerson = person