const FetchPostDetail = (postId) => {
    /*
        RETURN post DETAILS
    */
    let url = `${process.env.REACT_APP_API_URL}foro/publicaciones/${postId}`;

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

export default FetchPostDetail;