const PutPasswordReset = (uuid, password) => {
    const url = `${process.env.REACT_APP_API_URL}usuarios/pass_reset`;

    const response = fetch(url, {
      method: "put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
          uuid,
          password
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

export default PutPasswordReset;