import React from "react";
import {Switch,Route} from 'react-router-dom'
import './main.css';
import './Nav/nav.css'
import './main_page/Page1.css'
import Page1 from './main_page/Page1'
import Contact from './contacts/Contact'
const App = () => {
  return (
<Switch>
    <Route path='/' exact component={Page1}/>
    <Route path='/tools' exact component={Contact}/>
  </Switch>
  )
};

export default App;
