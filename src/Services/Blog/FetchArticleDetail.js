const FetchArticleDetail = (articleId) => {    
    /*
        RETURN articleId DETAILS
    */
    let url = `${process.env.REACT_APP_API_URL}blog/articulos/${articleId}`;
    
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

export default FetchArticleDetail;