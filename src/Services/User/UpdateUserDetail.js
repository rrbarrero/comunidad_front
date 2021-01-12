const UpdateUserDetail = (currentUser, profile) => {
    /*
        RETURN articleId DETAILS
    */
    let url = `${process.env.REACT_APP_API_URL}usuarios/${currentUser.userId}`;

    console.log("UpdateuserDetail", currentUser, profile);
    
    const response = fetch(url, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Token '+currentUser.token,
        },
        body: JSON.stringify(profile)
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

export default UpdateUserDetail;