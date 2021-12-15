import React from 'react'
import { Route, Switch } from 'react-router'
import Error from './pages/Error'
import Home from './Home'
import About from './pages/About'
import Blogs from './pages/Blogs'
import Case from './pages/Case'
import Conacts from './pages/Conacts'
import Service from './pages/Service'
const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/service" component={Service}></Route>
        <Route path="/blog" component={Blogs}></Route>
        <Route path="/casestudy" component={Case}></Route>
        <Route path="/contact" component={Conacts}></Route>
        <Route component={Error}></Route>
      </Switch>
    </>
  )
}

export default App
