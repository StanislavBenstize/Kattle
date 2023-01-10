
/*           __proto__

// const man = {
//    name: "Brad",
//    gender: "male",
//    age: 58,
// };

// const user = {
//    role: "client",
// };

// user.__proto__ = man;



// function User(fname, lname) {
//    this.fname = fname;
//    this.lname = lname;
//    this.fullname = function () {
//       return `${this.fname} ${this.lname}`;
//    };
// }

// User.prototype = new FuncForUser(); 

// const user = new User("Brad", "Pitt");
// const user2 = new User("Tom", "Rot");



// //console.log(user.fullname === user2.fullname) = false , хотя они используют одно и тоже свойство. Для этого создают отдельную функцию с функционалом и связывают __proto__ :




// создаем функцию конструктор с функционалом
function FuncForUser() {
   this.fullname = function () {
      return `${this.fname} ${this.lname}`;
   };
}

// создаем функцию конструктор с данными
function User(fname, lname) {
   this.fname = fname;
   this.lname = lname;
}

User.prototype = new FuncForUser(); // связываем данные с функционалом (данные наследуют весь функционал)

const user = new User("Brad", "Pitt");
const user2 = new User("Tom", "Rot");

console.log(user.fullname === user2.fullname); // true

// теперь у каждого инстанса User есть доступ к ОБЩЕМУ ФУНКЦИОНАЛУ, что позволяет оптимизировать выполнение кода

*/