const PostCommentNews = (newsId, currentUser, commentMsg) => {    
    /*
        RETURN newsId DETAILS
    */
    let url = `${process.env.REACT_APP_API_URL}news/noticias/${newsId}/comentarios`;
    
    const response = fetch(url, {
        method: 'post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Token '+currentUser.token,
        },
        body: JSON.stringify({
                noticia: newsId,
                cuerpo: commentMsg,
                autor: currentUser.userId,
        })
    }).then(resp => resp.json())
        .catch(error => console.log(error));
    return response;
}

export default PostCommentNews;