import './App.css';
import { Route, Switch, Link } from "react-router-dom"
import { PrivateRoute } from './utils/PrivateRoute';
import TrainerPage from "./components/trainer/Trainerpage"
import "./App.css";
import { useState } from 'react';
import styled from "styled-components";


const PageContainer = styled.div`
  text-align: center;
  p {
    font-family: "Raleway", sans-serif;
    font-size: 2rem;
    margin: 5%;
  }
  img {
    margin-top: 25%;
  }
  .middle .aligned .row {
    height: 100%;
  }
`;

const StyledLinks = styled.div`
  .link {
    color: #B91414;
  }
`;

function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  const logout = () => {
    localStorage.removeItem("token")
    setLoginStatus(false);
  };
  return (
    <div className="App">
      <StyledLinks>
        <header className="App-header">
          <h1>🏋️‍♀️ ANYWERE FITNESS 🏋️‍♀️</h1>
        </header>
        <div className="ui  menu" style={{ margin: "0" }}>
          <a className="item link">
            <Link className="link" to="/dashboard">Dashboard</Link>
          </a>
          <a className="link item">
            <Link className="link" to="/trainerpage">Trainers</Link>
          </a>
          <a className="link item">
            <Link className="link" to="/client">Clients</Link>
          </a>
          <a className="link item">
            <Link className="link" to="/login">Login</Link>
          </a>
          {// ternary statement renders logout button only while logged in 
            (loginStatus)
              ? <a className="link item"> <Link onClick={logout}>Logout</Link> </a>
              : <></>
          }
          <Switch>
            <Route exact path="/login" component={"login placeholder"} />

            {/* Private Route instead of route? */}
            <Route exact path="/dashboard" component={"dashboard placeholder"} />
            <PrivateRoute exact path="/trainerpage">
              <TrainerPage />
            </PrivateRoute>
          </Switch>
        </div>
      </StyledLinks>
    </div>
  );
}

export default App;
