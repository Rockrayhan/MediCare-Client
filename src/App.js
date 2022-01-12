import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import Contact from './Components/Contact/Contact';
import Department from './Components/Department/Department';
import Doctors from './Components/Doctors/Doctors';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';
import Signin from './Components/Signin/Signin';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>

      <BrowserRouter>
      <Switch>
      <Route exact path ="/">
        <Home></Home>
      </Route>
      <Route path = "/home">
        <Home></Home>
      </Route>
      <Route path="/department">
        <Department></Department>
      </Route>
      <Route path="/about">
        <About></About>
      </Route>
      <Route path="/contact">
        <Contact></Contact>
      </Route>
      <PrivateRoute path="/doctors">
        <Doctors></Doctors>
      </PrivateRoute>
      <PrivateRoute path="/blogs">
        <Blogs></Blogs>
      </PrivateRoute>
      <Route path="/signin"> 
        <Signin></Signin>
      </Route>
      <PrivateRoute path="/seeDetails/:id"> 
        <ServiceDetails></ServiceDetails>
      </PrivateRoute>
      <Route path="*">
        <NotFound></NotFound>
      </Route>

      </Switch>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
