const FetchArticleCommonList = (url) => {
    /*
        RETURN LAST X COMMON ARTICLES
    */
    let desiredUrl = `${process.env.REACT_APP_API_URL}blog/articulos`;
    if (url !== '') {
        desiredUrl = url;
    }
    
    const response = fetch(desiredUrl, {
        method: 'get',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    }).then(resp => resp.json())
        .catch(error => console.log(error));
    return response;
}

export default FetchArticleCommonList;