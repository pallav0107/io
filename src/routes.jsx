import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import {CustomerDetails } from './layouts';//,CustomerCreate, CustomerProfile
import {ProfileContainer} from './containers/Profile';
import {CreateContainer} from  './containers/Create';
 
const Routes = (props) => (
  
  <Router >
  <Switch>
  <Route 
          exact 
          path="/" 
         component={CustomerDetails} />}
        />
     
        <Route 
      
      path="/create" 
      //component={CustomerCreate} 
       render={(props) => <CreateContainer {...props} />}
    />
        <Route 
    
          path="/profile/:profileId" 
          //component={CustomerProfile}
          render={(props) => <ProfileContainer {...props} />}
        />
    {/* <Route 
        
        path="/search" 
        //component={CustomerProfile}
        render={(props) => <SearchContainer />}
      /> */}
        
        <Redirect from="/callback" to="/" /> 
  </Switch>
</Router>
);

export default Routes;
