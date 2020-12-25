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
    .then(resp => resp.json())
    .catch(error => error);

    return response;
}

// async function Login(username, password, setErrors){
//     let userData = {}
//     PerformLogin(username, password)
//     .then(usrDat => {
//         if ('non_field_errors' in usrDat) {
//             setErrors(usrDat['non_field_errors']);
//             return;
//         }
//         userData.userId = usrDat.user_id;
//         userData.token = usrDat.token;
//         if (userData.userId) {
//             FetchAvatar(usrDat.user_id).then(avtrData => {
//                 userData.avatar = avtrData.avatar;
//                 localStorage.setItem('logedIn', 'true');
//                 setErrors('');
//             });
//         }
//     });
// }

export default Login;
