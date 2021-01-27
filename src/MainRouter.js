import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './home/Home'
import PlayMedia from "./media/PlayMedia";


const MainRouter = ({data}) => {
  return (<div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/media/:mediaId" render={(props) => (
          <PlayMedia {...props} data={data} />
        )} />
      </Switch>
    </div>)
}

export default MainRouter
