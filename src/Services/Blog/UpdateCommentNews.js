const UpdateCommentNew = (comment, currentUser, commentMsg) => {    
    /*
        RETURN articleId DETAILS
    */
    let url = `${process.env.REACT_APP_API_URL}news/comentarios/${comment.id}`;
    
    const response = fetch(url, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Token '+currentUser.token,
        },
        body: JSON.stringify({
                noticia: comment.noticia,
                cuerpo: commentMsg,
                autor: currentUser.userId,
        })
    })
    .then(response => {
        return response.json().then(data => ({
            status: response.status,
            data,
        }))
    })
    .catch(error => console.log("login error", error));

    return response;
}

export default UpdateCommentNew;