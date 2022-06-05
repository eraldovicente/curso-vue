
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 521234,
        lat: 14.32123,
        lng: 34.23543
    }
}

const persona2  = { ...persona }; // Rompendo a passagem de objeto por referência com o operador spread
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);