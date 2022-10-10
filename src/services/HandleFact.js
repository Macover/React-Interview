const URL_FACT_API = 'https://catfact.ninja/fact';

const getFact = () =>{
    return fetch(URL_FACT_API)
            .then(response => response.json())                        
}

export default {
    getFact : getFact,
}