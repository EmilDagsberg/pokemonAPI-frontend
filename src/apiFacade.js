const BASE_URL = "http://localhost:7070/api/";
const LOGIN_ENDPOINT = "auth/login";

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

/* Insert utility-methods from later steps 
here (REMEMBER to uncomment in the returned 
object when you do)*/

const login = (user, password) => {
  const options = makeOptions("POST", false, {
    username: user,
    password: password,
  });
  return fetch(BASE_URL + LOGIN_ENDPOINT, options)
    .then(handleHttpErrors)
    .then((res) => {
      setToken(res.token);
    });
};

const fetchData = () => {
  const options = makeOptions("GET", true); //True add's the token
  return fetch(BASE_URL + "hotels", options).then(handleHttpErrors);
};

const fetchPokedex = () => {
  const options = makeOptions("GET", true);
  return fetch(BASE_URL + "pokedex", options).then(handleHttpErrors);
}

const makeOptions = (method, addToken, body) => {
  var opts = {
    method: method,
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
  };
  if (addToken && loggedIn()) {
    opts.headers["Authorization"] = `Bearer ${getToken()}`;
  }
  if (body) {
    opts.body = JSON.stringify(body);
  }
  return opts;
};

const setToken = (token) => {
  localStorage.setItem("jwtToken", token);
};
const getToken = () => {
  return localStorage.getItem("jwtToken");
};
const loggedIn = () => {
  const loggedIn = getToken() != null;
  return loggedIn;
};
const logout = () => {
  localStorage.removeItem("jwtToken");
};

const username = localStorage.getItem("username")

const facade = {
  makeOptions,
  setToken,
  getToken,
  loggedIn,
  login,
  logout,
  fetchData,
  fetchPokedex
};

export default facade;
