const FetchUserDetailProfile = (currentUser) => {
    
    const url = `${process.env.REACT_APP_API_URL}usuarios/perfil/${currentUser.userId}`;
    
    const response = fetch(url, {
        method: 'get',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + currentUser.token,
        }
    }).then(resp => resp.json())
        .catch(error => console.log(error));
    return response;
}

export default FetchUserDetailProfile;