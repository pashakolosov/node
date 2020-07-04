const user = require('./user');

console.log(user.hello)
console.log(user.user1)
console.log(user.user2)

const str = 'hello beech'
console.log('kek', str.slice(5, 3));
console.log('slkdf', str.substring(5, 3));


let str = 'Дана переменная str, в которой хранится к'


function circumcision(str, n) {
    if (str.lenth > n) {
        return str.substr(0, n) + '...'
    }
    else return str
}

console.log(circumcision(str, 5));