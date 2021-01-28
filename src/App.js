import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './pages/Home';
import Work from './pages/Work';
//
import { Switch, Route } from 'react-router-dom';

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

        {/* About */}

        {/* Contact */}
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
