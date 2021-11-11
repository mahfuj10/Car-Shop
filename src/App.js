import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider/AuthProvider';
import CarDetails from './Pages/CarDetails/CarDetails/CarDetails';
import Collection from './Pages/Collection/Collection/Collection';
import Dashboard from './Pages/Dashboard/Dashboard/DashboardDrawer';
import Cars from './Pages/Home/Cars/Cars/Cars';
import Header from './Pages/Home/Header/Header';
import Home from './Pages/Home/Home/Home';
import Navigation from './Pages/Home/Navigation/Navigation';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>

          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/home'>
            <Home />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/register'>
            <Register />
          </Route>

          <PrivateRoute path='/car/:id'>
            <CarDetails />
          </PrivateRoute>

          <Route path='/collection'>
            <Collection />
          </Route>

          <PrivateRoute path='/dashboard'>
            <Dashboard />
          </PrivateRoute>

        </Switch>

      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
