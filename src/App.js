import React from 'react';
import TravelDe from './travel-de';
import TravelRu from './travel-ru';
import Header from './Header';

import './pages/index.css';
import { Route, Switch } from 'react-router-dom';




function App() {

  return (  <>
    
      <div className="root">
        <Header />
        

    <Switch>
    <Route exact path="/travel-de-ru/">
        <TravelDe   />
      </Route>
      <Route path="/de">
        <TravelDe   />
      </Route>
      <Route path="/ru">
         <TravelRu   />
      </Route>
    </Switch>

    </div>
      </>

     
   
  );
}

export default App;
