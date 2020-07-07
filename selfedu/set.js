let car = new Map([
    ['model', 'opel'],
    ['color', 0xff],
    ['price', 1000]
]);


car.forEach((value, key) => {
    console.log(`car[${key} : ${value}]`)
})