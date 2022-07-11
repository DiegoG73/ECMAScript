const data = {
    frontend: 'Diego',
    backend: 'Kenneth',
    designer: 'Aliona'
}

//Transforming object to array
const entries = Object.entries(data)
console.log(entries)
console.log(entries.length)

//Object values
const data1 = {
    frontend: 'Diego',
    backend: 'Kenneth',
    designer: 'Aliona'
}

const values = Object.values(data1)
console.log(values)
console.log(values.length)

const string = 'Hello'
console.log(string.padStart(7, 'hi'))
console.log(string.padEnd(12, ' ------'))
console.log('Food'.padEnd(12, ' bastard'))