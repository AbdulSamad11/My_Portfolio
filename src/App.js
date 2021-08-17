import React from "react";
import {Switch,Route} from 'react-router-dom'
import './main.css';
import './Nav/nav.css'
import './main_page/Page1.css'
import Page1 from './main_page/Page1'
const App = () => {
  return (
<Switch>
    <Route path='/' component={Page1}/>
  </Switch>
  )
};

export default App;
