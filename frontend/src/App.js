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

import AuthProvider from './contexts/AuthProvider';

function App() {
  return (
    <Router>
      <AuthProvider>
        <NavBar/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/titles' component={Titles} />
          <Route exact path='/title/:titleId' component={TitleDetails} />
          <Route exact path={["/login", "/register"]} component={Auth} />
          <Route exact path='/title/:titleName/chapter/:chapterId' component={Reader} />
        </Switch>
      </AuthProvider>
    </Router>
  )
}

export default App;
