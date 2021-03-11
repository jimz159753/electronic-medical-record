import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './Login'
import Triage from './Triage'
import ConsentLetter from './ConsentLetter'
import Main from './Main'
import Prescription from './Prescription'
import LabCabinet from './LabCabinet'

const Routes: React.FC = () => {
   return (
      <Router>
         <Switch>
            <Route path="/" exact component={Login} />
            <Main>
               <Route path="/triage" exact component={Triage} />
               <Route path="/consent" exact component={ConsentLetter} />
               <Route path="/prescription" exact component={Prescription} />
               <Route path="/lab_cabinet" exact component={LabCabinet} />
            </Main>
         </Switch>
      </Router>
   )
}

export default Routes
