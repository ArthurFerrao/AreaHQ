import './App.css'
import Home from './pages/Home'
import Titles from './pages/Titles'
import TitleDetails from './pages/TitleDetails'
import Reader from './pages/Reader'
import Auth from './pages/Auth'
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
        <Route exact path='/' render={() => <Home/>} />
        <Route exact path='/titles' render={() => <Titles/>} />
        <Route exact path='/title/:titleId' render={() => <TitleDetails/>} />
        <Route exact path={["/login", "/register"]} render={() => <Auth/>} />
        <Route exact path='/title/:titleName/chapter/:chapterId' render={() => <Reader/>} />
      </Switch>
    </Router>
  )
}

export default App;
