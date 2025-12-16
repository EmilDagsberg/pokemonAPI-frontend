import styles from "./EndpointTable.module.css";

const EndpointTable = () => {
  return (
    <div className={styles.endpointOverview}>
      <h1>Endpoints overview for PkmonAPI</h1>

      <table className={styles.endpointsTable}>
        <thead>
          <tr>
            <th>Method</th>
            <th>URL</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>GET</td>
            <td>/api/pokemon</td>
            <td>Fetch a list of all Pokemon</td>
          </tr>
          <tr>
            <td>POST</td>
            <td>/api/pokemon</td>
            <td>Create a new Pokemon and save it in our database</td>
          </tr>
          <tr>
            <td>GET</td>
            <td>{`/api/pokemon/{id}`}</td>
            <td>Fetch a Pokemon by its id</td>
          </tr>
          <tr>
            <td>UPDATE</td>
            <td>{`/api/pokemon/{id}`}</td>
            <td>Updates a specfic Pokemon by its id</td>
          </tr>
          <tr>
            <td>DELETE</td>
            <td>{`/api/pokemon/{id}`}</td>
            <td>Deletes a specfic Pokemon by its id</td>
          </tr>
          <tr>
            <td>GET</td>
            <td>/api/pokemon/random</td>
            <td>Fetch a random Pokemon</td>
          </tr>
          <tr>
            <td>GET</td>
            <td>{`/api/pokemon/random/{type}`}</td>
            <td>Fetch a random Pokemon with a specific type</td>
          </tr>
          <tr>
            <td>GET</td>
            <td>{`/api/type/{type}`}</td>
            <td>Fetch a list of Pokemon with a specific type</td>
          </tr>
          <tr>
            <td>POST</td>
            <td>{`/api/pokedex/{id}`}</td>
            <td>Adds a Pokemon with a specific id to users pokedex</td>
          </tr>
          <tr>
            <td>PUT</td>
            <td>{`/api/pokedex/{id}`}</td>
            <td>
              Adds a Pokemon with a specific id from users pokedex to users
              Pokemonteam
            </td>
          </tr>
          <tr>
            <td>POST</td>
            <td>/api/auth/register</td>
            <td>Register a new user</td>
          </tr>
          <tr>
            <td>POST</td>
            <td>/api/auth/login</td>
            <td>Login with an existing user</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EndpointTable;
