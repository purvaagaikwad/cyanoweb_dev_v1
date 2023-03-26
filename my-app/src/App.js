import "./App.css";
import {HomePage} from "./containers/HomePage";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { CustomerAccessPage } from "./containers/customerAccessPage";
import { Dashboard } from "./containers/Dashboard";
import { Imap } from "./containers/Imap"
import {Proposal} from "./containers/Proposal"
import {FileUpload} from "./containers/FileUpload"
import { graphs } from "./containers/graphs";
//import { Header } from './components/Header'
import map from "./containers/map"

import axios from "axios";
import { format } from "timeago.js";
import Register from "./components/Register";
import Login from "./components/Login";
import { useEffect, useState } from "react";
import TopSectionBackgroundImg from "../src/assets/backdrop.jpg";
import styled from "styled-components";
import { useHistory } from 'react-router-dom';
import { About } from "./containers/About";
import { Contact } from "./containers/Contact";
import {graphsE} from "./containers/graphsE"
import {graphsM} from "./containers/graphsM"
import {Treatmentcfs} from "./containers/Treatmentcfs"
import {Treatmentaca} from "./containers/treatmentaca"
import {Treatmentao} from "./containers/treatmentao"
import {Treatmentmfil} from "./containers/treatmentmfil"






function App() {
  console.log("555")
  return (
    <div className="App">
     
      <Router>
        <Switch>
          <Route path ="/" exact component={HomePage} />
          <Route path = "/customer/access/:action" exact component={CustomerAccessPage} />
          <Route path = "/dashboard/" exact component={Dashboard} />
          <Route path = "/imap/" exact component={map} />
          <Route path = "/proposal/" exact component={Proposal} />
          <Route path = "/fileUpload/" exact component={FileUpload} />
          <Route path = "/graphs/" exact component = {graphs} />
          <Route path = "/contact/" exact component = {Contact} />
          <Route path = "/graphsE/" exact component = {graphsE} />
          <Route path = "/graphsM/" exact component = {graphsM} />
          <Route path = "/treatmentcfs/" exact component = {Treatmentcfs} />
          <Route path = "/treatmentmfil/" exact component = {Treatmentmfil} />
          <Route path = "/treatmentao/" exact component = {Treatmentao} />
          <Route path = "/treatmentaca/" exact component = {Treatmentaca} />
    
        </Switch>
      </Router>
    </div>
  );
 }

export default App;
