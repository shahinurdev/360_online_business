import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./Components/Home/Home/Home";
function App() {
  return (
    <Router>
      <Switch> 
        <Route>
       <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
