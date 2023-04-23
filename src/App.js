import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";

import "./styles.css";

const UserContext = createContext();

export default function App() {
  const user1 = { name: "Alan" };
  const user2 = { name: "Bob" };

  return (
    <>
      <UserContext.Provider value={user1}>
        <div className="App">
          <h1>Hello CodeSandbox - {user1.name}</h1>
          <Component1 />
        </div>
      </UserContext.Provider>

      <UserContext.Provider value={user2}>
        <div className="App">
          <h1>Hello CodeSandbox - {user2.name}</h1>
          <Component1 />
        </div>
      </UserContext.Provider>
    </>
  );
}

function Component1() {
  return (
    <>
      <h2>Component 1</h2>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(UserContext);

  return <h3>Component 5 - {user.name}</h3>;
}
