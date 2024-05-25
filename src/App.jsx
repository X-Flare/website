import { useState } from "react";
import { Outlet, NavLink, useRouteError } from "react-router-dom";
import styled from "@emotion/styled";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";

const Header = styled.header`
background: #ff5722;
  color: white;
  padding: 1rem 0;
`;

const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    justify-content: center;
    margin: 0;
    padding: 0;
  }

  a {
    color: white;
    text-decoration: none;
    padding: 0 1rem;

    &:hover {
      color: #ffab91;
    }
  }
`;

export function Root({ children }) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      {children || <Outlet />}
    </>
  );
}

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

function Navbar() {
  return (
    <Header>
      <Nav>
        <ul>
          <li>
            <NavLink to="/">{/*<img src='favicon2.png'/> */}Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </Nav>
    </Header>
  );
}

export function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <p>Error: {error.statusText || error.message}</p>
    </>
  );
}
