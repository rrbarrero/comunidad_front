const IsLogedIn = () => {
  const logedIn = localStorage.getItem('logedIn');
  if ((logedIn !== null) && (logedIn === 'true')) {
    return true;
  }
  return false;
};
export default IsLogedIn;