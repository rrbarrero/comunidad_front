const FetchNewDetail = (newId) => {
    /*
        RETURN LAST X COMMON ARTICLES
    */
    const url = `${process.env.REACT_APP_API_URL}news/noticias/${newId}`;
    
    const response = fetch(url, {
        method: 'get',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    }).then(resp => resp.json())
        .catch(error => console.log(error));
    return response;
}

export default FetchNewDetail;