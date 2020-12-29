const PostCommentArticle = (articleId, currentUser, commentMsg) => {    
    /*
        RETURN articleId DETAILS
    */
    let url = `${process.env.REACT_APP_API_URL}blog/articulos/${articleId}/comentarios`;
    
    const response = fetch(url, {
        method: 'post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Token '+currentUser.token,
        },
        body: JSON.stringify({
                articulo: articleId,
                cuerpo: commentMsg,
                autor: currentUser.userId,
        })
    }).then(resp => resp.json())
        .catch(error => console.log(error));
    return response;
}

export default PostCommentArticle;