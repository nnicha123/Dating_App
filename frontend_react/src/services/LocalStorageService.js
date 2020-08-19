const ACCESS_TOKEN = "ACCESS_TOKEN";

const _setRole = function (role) {
  localStorage.setItem("Role", role)
}
const _getUserRole = function () {
  return localStorage.getItem("Role")
}

const _setToken = function (token) {
  localStorage.setItem(ACCESS_TOKEN, token);
};

const _getToken = function () {
  return localStorage.getItem(ACCESS_TOKEN);
};

const _removeToken = function () {
  localStorage.removeItem(ACCESS_TOKEN);
};
const _removeRole = function () {
  localStorage.removeItem("Role");
}

export default {
  setToken: _setToken,
  getToken: _getToken,
  removeToken: _removeToken,
  setRole: _setRole,
  getUserRole: _getUserRole,
  removeRole: _removeRole,
};