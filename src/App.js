import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  NavLink
} from "react-router-dom";
import Home from './pages/home'
import Login from './pages/login'
import ReduxDemo from './pages/reduxDemo'
import y, { cm } from './until/style'

function App() {
  return (
    <div>
      <Router>
        <div style={cm( y.udr, y.uac ,y.w(200),y.uja)}>
          <NavLink to='/home'>首页</NavLink>
          <NavLink to='/login'>登录</NavLink>
          <NavLink to='/reduxDemo'>reduxDemo</NavLink>
        </div>
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/reduxDemo' component={ReduxDemo} />
          <Redirect to='/home' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
