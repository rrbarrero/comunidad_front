async function Login(username, password){

    /*
       MAKE THE LOGIN A RETURN A OBJECT
    */
    
    if ((!username) || (!password)) {
        return null;
    }
    
    const url = `${process.env.REACT_APP_API_URL}usuarios/api-token-auth/`;
    
    const response = fetch(url, {
        method: 'post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username,
            password,
        })
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


export default Login;
