const PutRecoverPass = ( email ) => {
    const url = `${process.env.REACT_APP_API_URL}usuarios/recover_pass`;

    const response = fetch(url, {
      method: "put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
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

export default PutRecoverPass;