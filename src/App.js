import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Navbarr from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Services from './components/services';
import Servicedetails from './components/servicedetails';


function App() {
  return (
    <>
    <Router>
      <Navbarr/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about'  component={About}/>
        <Route path='/contact'  component={Contact}/>
        <Route path='/services' exact component={Services}/>
        <Route path='/services/:id'  component={Servicedetails}/>

      </Switch>
    </Router>

    </>
  );
}

export default App;
