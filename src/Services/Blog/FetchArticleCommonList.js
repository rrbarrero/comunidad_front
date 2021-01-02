const FetchArticleCommonList = (url) => {
    /*
        RETURN LAST X COMMON ARTICLES
    */
    
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

export default FetchArticleCommonList;