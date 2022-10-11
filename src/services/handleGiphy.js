
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const URL_GIPHY_API = 'http://api.giphy.com/v1/gifs/search';

const getGif = (firstThreeWords) =>{
    return fetch(`${URL_GIPHY_API}?api_key=${API_KEY}&q=${firstThreeWords}&limit=1`)
            .then(response => response.json())                        
}
export default {
    getGit : getGif,
}