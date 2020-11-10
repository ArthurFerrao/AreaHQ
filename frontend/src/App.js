import './App.css'
import Home from './pages/Home'
import Titles from './pages/Titles'
import TitleDetails from './pages/TitleDetails'
import Reader from './pages/Reader'
import NavBar from './components/NavBar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route path='/' exact>
          <Home/>
        </Route>
        <Route path='/titles' exact>
          <Titles/>
        </Route>
        <Route path='/title/:titleId' exact>
          <TitleDetails/>
        </Route>
        <Route path='/title/:titleName/chapter/:chapterId' exact>
          <Reader/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
