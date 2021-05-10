import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import MenuBoard from './pages/menuboard';

const Routes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route component={MenuBoard} path="/" exact />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
