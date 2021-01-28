import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './pages/Home';
import Work from './pages/Work';
import Contact from './pages/Contact';
//
import { Switch, Route } from 'react-router-dom';
import About from './pages/About';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>

        <Route path='/work' exact>
          <Work />
        </Route>

        <Route path='/about'>
          <About />
        </Route>

        <Route path='/contact'>
          <Contact />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
