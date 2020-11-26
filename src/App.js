import './App.css'
import Home from './components/home'
import Register from './Signup'
import Login from './components/auth'
// import PaymentForm from './components/payment'
import './common.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import LogoutPage from './components/logout';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            
            { !localStorage.getItem('login') &&
              <li>
                <Link to="/login">Login</Link>
              </li>
            }
            { !localStorage.getItem('login') &&
              <li>
                <Link to="/register">Register</Link>
            </li>
            }
            { localStorage.getItem('login') && 
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            }
            
            {/* <li>
              <Link to="/payment">Payment</Link>
            </li> */}
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
            <Route path="/login">
              <Login />
            </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/logout">
            <LogoutPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
