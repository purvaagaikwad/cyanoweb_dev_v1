import React from "react";
import { Button } from "../button";
import styled from "styled-components";
import {Link} from "react-router-dom";
import "../../App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import axios from "axios";
import { format } from "timeago.js";
import Register from "../../components/Register";
import Login from "../../components/Login";
import { useEffect, useState } from "react";
import { navItems } from "./navitems";
import "./navbar.css"
import {Dropdown} from "./Dropdown";
import px2vw from "../../utils/px2vw"



import { useHistory } from 'react-router-dom';

const NavbarContainer = styled.div`
    width: 100vw;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x:hidden;
    
    

    background-color: ${({ useTransparent}) =>useTransparent ? "transparent" : "#4F7942" };


`;

const AccessibilityContainer = styled.div`
    display: flex;
    height: 100%
    align-items: center;
    


`;

const AnchorLink = styled.a`
    font-size: 24px;
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    outline: none;
    transition: all 200ms ease-in-out;
    
    &:hover {
        
    }
`;

const LoginContainer = styled.div`
    position: absolute;
    width: 200px;
    height: 80px;
    left: 1100px;
    top: 20px;
    
`;

const RegisterContainer = styled.div`
    position: absolute;
    width: 200px;
    height: 80px;
    left: 1300px;
    top: 20px;
    
`;

const LogoutContainer = styled.div`
    position: absolute;
    width: 200px;
    height: 80px;
    left: 1300px;
    top: 20px;
    
`;






export function Navbar(props) {
    const [dropdown, setDropdown] = useState(false);
    const { useTransparent } = props;
    const myStorage = window.localStorage;
    const [currentUsername, setCurrentUsername] = useState(myStorage.getItem("user"));
    const [showRegister, setShowRegister] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    // async function handleLogout () {
    //   history.push("/logout/")
    // };
    let history = useHistory();
  

  



    return (
        
    
        <NavbarContainer>
            <AccessibilityContainer>

               
         <div>               <button className="button logout">
                <a href="https://ceas5.uc.edu/Shibboleth.sso/Logout?return=https%3A%2F%2Flogin.uc.edu%2Fidp%2Fprofile%2FLogout">Log Out  </a>  </button>
              <ul className="nav-items">
                {navItems.map(item =>{

                          if (item.title === "Treatment Options") {
                            return (
                              <li
                                key={item.id}
                                className={item.cName}
                                onMouseEnter={() => setDropdown(true)}
                                onMouseLeave={() => setDropdown(false)}
                              >
                                <Link to={item.path}>{item.title}</Link>
                                {dropdown && <Dropdown />}
                              </li>
                            ); 
                          }   
                  return (
                  <li key = {item.id} className={item.cName}>
                    <Link to ={item.path}>{item.title}  </Link>
                  </li>
                  )
                })}
              </ul>

              </div>

         </AccessibilityContainer>
        </NavbarContainer> 
        
      

    );

}
