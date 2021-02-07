import React, {useEffect, useState} from 'react';
import { Link, useHistory } from "react-router-dom"
import styled from "styled-components";

//for conditional rendering
import axiosWithAuth from "../utils/axiosWithAuth"


export const StyledLinks = styled.div`
    font-family: Helvetica, sans-serif;
    .link {
      text-decoration: none;
      color: lightgrey;
    }
    .link:hover{
        color: white;
    }
    .ui {
      background-color: #3D434A;
      width: 100%;
    }
    .menu {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      padding: 0.5rem 0 0.5rem 0;
    }
    h1 {
      padding: 1rem;
      color: gainsboro;
      font-size: 1.3rem;
    }
`;

function Nav() {

    //for conditional redering
    const [isInts, setIsInts] = useState(false);
    useEffect(() => {
      axiosWithAuth().get('/api/auth/whoami')
          .then(res => {
             if (res.data.role === 2) {
               setIsInts(true);
             } 
          })
  }, [])

    const history = useHistory();

    const onLogout = () => {
        localStorage.removeItem('token');
        history.push('/login');
        history.go();
    }

    return (
        <StyledLinks>
            <div className="ui menu" >
                <h1>🏋️‍♀️ ANYWHERE FITNESS 🏋️‍♀️</h1>
                <Link className="link" to="/">Dashboard</Link>
                <Link>{ isInts ? <Link className="link" to="/trainerpage">Trainers</Link>  :  <Link className="link" to="/clientpage">Clients</Link>} </Link>
                <Link className="link" onClick={onLogout}>Logout</Link>
            </div>
        </StyledLinks>
    )
}

export default Nav;
