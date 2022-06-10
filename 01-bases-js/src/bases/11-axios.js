import axios from 'axios'

const apiKey = 'F27QYE8jyWmmEzQoclfOXVXOtc7pX1uI'
//`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`

const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey
    }
})

giphyApi.get('/random')
    .then( resp => {

        const { data } = resp.data
        const { url } = data.images.original

        // console.log(resp.data.data.images.original.url)
        // const url = resp.data.data.images.original.url

        const img = document.createElement('img')
        img.src = url

        document.body.append( img )
    })