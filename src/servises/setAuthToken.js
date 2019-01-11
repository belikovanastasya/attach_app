export const setAuthToken = {
  getToken() {
    return { token: localStorage.getItem('jwtToken') };
  },
  removeToken() {
    localStorage.removeItem('jwtToken');
  }
}
