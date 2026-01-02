const BASE_URL = "http://localhost:7070/api/";
const LOGIN_ENDPOINT = "auth/login";
const REGISTER_ENDPOINT ="auth/register";

async function handleHttpErrors(res) {
  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw { status: res.status, error };
  }

  // DELETE / 204 No Content
  if (res.status === 204) {
    return null;
  }

  // Some DELETEs return 200 with empty body
  const text = await res.text();
  return text ? JSON.parse(text) : null;
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

const createUser = (user, password) => {
  const options = makeOptions("POST", false, {
    username: user,
    password: password,
  });
  return fetch(BASE_URL + REGISTER_ENDPOINT, options)
    .then(handleHttpErrors)
    .then((res) => {
      setToken(res.token);
    });
};

const fetchPokedex = () => {
  const options = makeOptions("GET", true);
  return fetch(BASE_URL + "pokedex", options).then(handleHttpErrors);
};

const addPokemonToTeam = (pokemonId) => {
  const options = makeOptions("PUT", true);
  return fetch(BASE_URL + "pokedex/" + pokemonId, options).then(handleHttpErrors);
};

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
  window.dispatchEvent(new Event("auth-change"))
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
  window.dispatchEvent(new Event("auth-change"))

};

const updatePokemon = (pokemonId, updatedPokemon) => {
  const options = makeOptions("PUT", true, updatedPokemon);
  return fetch(
    BASE_URL + "pokemon/" + pokemonId,
    options
  ).then(handleHttpErrors);
};

const deletePokemon = (pokemonId) => {
  const options = makeOptions("DELETE", true);
  return fetch(
    BASE_URL + "pokemon/" + pokemonId,
    options
  ).then(handleHttpErrors);
};

const createPokemon = (pokemon) => {
  const options = makeOptions("POST", true, pokemon);
  return fetch(BASE_URL + "pokemon", options).then(handleHttpErrors);
};



const username = localStorage.getItem("username")

const facade = {
  createPokemon,
  deletePokemon,
  updatePokemon,
  makeOptions,
  username,
  setToken,
  getToken,
  loggedIn,
  login,
  createUser,
  logout,
  fetchPokedex,
  addPokemonToTeam
};

export default facade;
