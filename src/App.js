
import Home from './components/Home';
import Data from './components/Data';
import {BrowserRouter as Router , Switch , Route , Link ,Redirect} from 'react-router-dom'
import Details from './components/Details';
import EditUser from './components/EditUser';
import Edit from './components/Edit'

function App() {
  return (
     <Router>
    <div className="App">
     {/* <Home /> */}
  
       <Switch>
       <Route exact path="/" component={Home}/>
         <Route exact path="/data" component={Data}/>
         <Route exact path={`/details/:id`} component={Details}/>
         <Route exact path={`/edit/:id`} component={EditUser}/>
       </Switch>
       
    </div>
      </Router>
  );
}

export default App;
