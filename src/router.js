import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Auth from './components/Auth.js';
import Dashboard from './components/Dashboard.js';
import WizardOne from './components/WizardOne.js'
import WizardTwo from './components/WizardTwo.js'
import WizardThree from './components/WizardThree.js'
import WizardFour from './components/WizardFour.js'
import WizardFive from './components/WizardFive.js'

export default(
    <Switch>
      <Route component={ Auth } path="/" exact />
      <Route component={ Dashboard } path="/dashboard" />
      <Route component={ WizardOne } path="/wizard/step-one" />
      <Route component={ WizardTwo } path="/wizard/step-two" />
      <Route component={ WizardThree } path="/wizard/step-three" />
      <Route component={ WizardFour } path="/wizard/step-four" />
      <Route component={ WizardFive } path="/wizard/step-five" />
    </Switch>
)
