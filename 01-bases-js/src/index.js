

console.log('Inicio');

new Promise( (resolve, reject) => {

    console.log('cuerpo de la promessa')
    resolve('Promesa resulta')

})
.then( console.log )
.catch( console.log )

console.log('Fin');