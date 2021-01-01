const FetchTopicDetail = (topicId) => {    
    /*
        RETURN topicId DETAILS
    */
    let url = `${process.env.REACT_APP_API_URL}foro/temas/${topicId}`;
    
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

export default FetchTopicDetail;