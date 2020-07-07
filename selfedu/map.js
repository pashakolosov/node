const map = new Map();


map.set(true, 'boolean');
map.set(1, 'num1');
map.set('1', 'str1');

let user1 = {
    name: 'Pasha',
    age: 14,
    rase: 'white'
}

map.set(user1, 'Pasha, so stupid man...Ohh damn')

console.log(map.delete())
console.log(map.clear(map))
console.log(map.size)