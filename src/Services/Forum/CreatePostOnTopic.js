const CreatePostOnTopic = (currentUser, topicId, post) => {
     /*
        RETURN LAST X COMMON ARTICLES
    */
    
    let url = `${process.env.REACT_APP_API_URL}foro/temas/${topicId}/publicaciones`;
    
    const response = fetch(url, {
        method: 'post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Token '+currentUser.token,
        },
        body: JSON.stringify({
            titulo: post.titulo,
            cuerpo: post.cuerpo,
            autor: currentUser.userId,
            tema: topicId,
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

export default CreatePostOnTopic;