const FetchCommentsOfNew = (newId) => {    
    /*
        RETURN LAST X COMMON newId
    */
    
    let url = new URL(`${process.env.REACT_APP_API_URL}news/noticias/${newId}/comentarios`);

    const params = {
        page_size: 50
    }
    url.search = new URLSearchParams(params).toString();
    
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

export default FetchCommentsOfNew;