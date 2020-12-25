const IsLogedIn = () => {
  const logedIn = window.sessionStorage.getItem("logedIn");
  if ((logedIn !== null) && (logedIn === 'true')) {
    return true;
  }
  return false;
};
export default IsLogedIn;