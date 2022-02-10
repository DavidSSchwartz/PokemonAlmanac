const baseURL = 'https://pokeapi.co/api/v2/'

const fetchData = async (urlParam, limit) => {
    let fullURL = `${baseURL}${urlParam}/?limit=${limit}`;
    let result = await fetch(fullURL);
    return result.json();
}

export default fetchData;