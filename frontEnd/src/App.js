import './App.css';
import MainUserPage from'./components/mainUsersApp';
import LoginAdminPage from './components/adminLogin';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path='/login'>
                <LoginAdminPage></LoginAdminPage>
            </Route>
            <Route path='/'>
              <MainUserPage></MainUserPage>
            </Route>
          </Switch>
        </Router>

        
      
      
      
    </div>
  );
}

export default App;
