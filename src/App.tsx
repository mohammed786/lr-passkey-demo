import { useState } from "react";
import passkey from "./assets/passkey.png";
import lr from "./assets/lr.png";
import "./App.css";
import { useLRAuth } from "loginradius-react";

function App() {
  const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } =
    useLRAuth();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={passkey} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={lr} className="logo" alt="React logo" />
        </a>
      </div>
      <h1>LoginRadius Passkey Demo</h1>
      <div className="card">
        {isAuthenticated ? (
          <div>
            Hello {user?.FullName || user?.Email[0].Value}!
            <button onClick={() => logout(window.location.origin)}>
              Log out
            </button>
          </div>
        ) : (
          <button onClick={() => loginWithRedirect()}>Log in</button>
        )}
      </div>
    </>
  );
}

export default App;
