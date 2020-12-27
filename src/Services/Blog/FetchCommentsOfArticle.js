const FetchCommentsOfArticle = (articleId) => {    
    /*
        RETURN LAST X COMMON ARTICLES
    */
    let url = `${process.env.REACT_APP_API_URL}blog/articulos/${articleId}/comentarios`;
    
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

export default FetchCommentsOfArticle;