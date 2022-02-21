const baseURL = 'https://pokeapi.co/api/v2/'

const fetchData = async (urlParams, limit) => {

    let fullURLs = urlParams.map(urlParam =>`${baseURL}${urlParam}/?limit=${limit}`);

    let result = await Promise.all(fullURLs.map(fullURL => fetch(fullURL).then(res => res.json())));
    return result;
}

export default fetchData;