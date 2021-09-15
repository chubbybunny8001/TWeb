import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/HomeComponent/Home';
import About from './components/AboutComponent/About'
import Art from './components/ArtComponent/Art';
import Artwork from './components/ArtworkComponent/Artwork';
import Project from './components/ProjectsComponent/Project';

import Navigation from './components/NavbarComponent/Navbar';

function App() {
  return (
    <BrowserRouter style={{margin:0, padding:0}}>
    <Navigation/>
    <Switch>
      <Route component={Home} path='/' exact />
      <Route component={About} path='/aboutMe' />
      <Route component={Artwork} path='/art/:slug' />
      <Route component={Art} path='/art' />
      <Route component={Project} path='/project' />
    </Switch>

    </BrowserRouter>
  )
}

export default App;
