# Implementing passkey in loginradius

To implement passkey using loginradius we need to first enable the passkey from LoginRadius dashboard and add the configuration needed to enable the pass

<Detail about passkey config from LoginRadius>

Add LoginRadius SDK in you React app by doing these simple steps

1. Install LoginRadius SDK

Using [npm](https://npmjs.org/)

```bash
npm install loginradius-react
```

## Getting Started

Configure the SDK by wrapping your application in `LRAuthProvider`:

```jsx
// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { LRAuthProvider } from "loginradius-react";

ReactDOM.render(
  <React.StrictMode>
    <LRAuthProvider
      appName="YOUR_LOGINRADIUS_APPNAME"
      apiKey="YOUR_LOGINRADIUS_APIKEY"
      redirectUri={window.location.origin}
    >
      <App />
    </LRAuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

Use the `useLRAuth` hook in your components to access authentication state (`isLoading`, `isAuthenticated` and `user`) and authentication methods (`loginWithRedirect` and `logout`):

```jsx
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

```