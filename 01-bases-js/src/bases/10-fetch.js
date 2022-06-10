
const apiKey = 'F27QYE8jyWmmEzQoclfOXVXOtc7pX1uI'
//https://api.giphy.com/v1/gifs/random?api_key=F27QYE8jyWmmEzQoclfOXVXOtc7pX1uI#

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)
    .then( resp => resp.json() )
    .then(({ data }) => {
        const { url } = data.images.original
        
        const img = document.createElement('img')
        img.src = url

        document.body.append( img )
    })
    