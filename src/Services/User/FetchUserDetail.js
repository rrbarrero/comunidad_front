const FetchUserDetail = (userId) => {
    if (!userId) {
        return null;
    }

    const url = `${process.env.REACT_APP_API_URL}usuarios/${userId}`;
    
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

export default FetchUserDetail;