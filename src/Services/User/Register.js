const Register = (data) => {

    const {username, email, password} = data;
    
    const url = `${process.env.REACT_APP_API_URL}usuarios/registro`;

    const response = fetch(url, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    })
      .then((response) => {
        return response.json().then((data) => ({
          status: response.status,
          data,
        }));
      })
      .catch((error) => console.log("login error", error));

    return response;
}

export default Register;