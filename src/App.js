import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About'
import Art from './components/Art';
import Artwork from './components/Artwork';
import Project from './components/Project';

import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
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
