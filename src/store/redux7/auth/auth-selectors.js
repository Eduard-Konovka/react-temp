const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

const getIiFetchingCurrent = state => state.auth.isFetchingCurrentUser;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIiFetchingCurrent,
};
export default authSelectors;
