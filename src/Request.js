
const key = '514f8cb0263913bfa0c083553e36d312'

const requests ={
    requestPopular:`https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
    requestNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`

}
    
export default requests
