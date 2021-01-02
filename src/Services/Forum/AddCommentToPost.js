const AddCommentToPost = (postId, currentUser, commentMsg) => {    
    /*
        RETURN articleId DETAILS
    */
    let url = `${process.env.REACT_APP_API_URL}foro/publicaciones/${postId}/comentarios`;
    
    const response = fetch(url, {
        method: 'post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Token '+currentUser.token,
        },
        body: JSON.stringify({
                publicacion: postId,
                cuerpo: commentMsg,
                autor: currentUser.userId,
        })
    }).then(response => {
        return response.json().then(data => ({
            status: response.status,
            data,
        }))
    })
    .catch(error => console.log("login error", error));

    return response;
}

export default AddCommentToPost;