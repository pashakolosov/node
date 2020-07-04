
const user1 = {
        name: 'Dima',
        age: 23,
        favColor: 'red',
        car: 'audi'
    },
    user2 = {
        name: 'Elena',
        age: 22,
        favColor: 'green',
        car: 'mercedes'
    }

let sayHello = () => console.log('hello')


module.exports = {
    user1: user1,
    user2: user2,
    hello: sayHello()
}