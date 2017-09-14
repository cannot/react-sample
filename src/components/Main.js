import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Viewlist from './Viewlist'
import Viewlist_replica from './Viewlist-replica'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/viewlist' component={Viewlist}/>
      <Route path='/viewlist_replica' component={Viewlist_replica}/>
    </Switch>
  </main>
)

export default Main
