export const UpdateUserDetail = (currentUser, profile) => {
    /*
        RETURN articleId DETAILS
    */
    let url = `${process.env.REACT_APP_API_URL}usuarios/perfil/${currentUser.userId}`;

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

export const updateAvatar = (currentUser, newAvatar) => {  
     /*
        RETURN articleId DETAILS
    */
    let url = `${process.env.REACT_APP_API_URL}usuarios/${currentUser.userId}/avatar`;

    const formdata = new FormData();
    formdata.append("avatar", newAvatar, newAvatar.name);
    formdata.append("user", currentUser.userId);
    formdata.append("primary", "True");

    const response = fetch(url, {
        method: 'PUT',
        headers: {
            // Accept: 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Token '+currentUser.token,
        },
        body: formdata
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