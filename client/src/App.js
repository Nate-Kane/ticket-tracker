import logo from './logo.svg';
import './App.css';
import Home from "./demo/Home";
import Things from './demo/Things';
import NoMatch from './components/NoMatch';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <>
        <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/things" component={Things} />
            <Route component={NoMatch} />
          </Switch>
      </>
    </div>
  );
}

export default App;
