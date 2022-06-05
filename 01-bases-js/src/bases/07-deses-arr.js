
const characters = ['Goku', 'Vegeta', 'Trunks']

const [ , , trunks, goten = 'No tiene valor' ] = characters

// const goku = characters[0]
// const vegeta = characters[1]
// const trunks = characters[2]

// console.log( trunks, goten );

const returnArray = ([ letters, numbers]) => {
    return [ letters, numbers]
}

const [ letters, numbers ] = returnArray(['XYZ',986])

console.log( letters, numbers );