import React from 'react'
import {BrowserRouter as Router , Route} from 'react-router-dom'
import AppNavgatior from './Components/AppNavgatior'
import Pokedex from './Containers/Pokedex'

export default function App() {
  return (
    <Router>
     <AppNavgatior/>
      <Route path ="/" component = {Pokedex} />
    </Router>
  )
}
