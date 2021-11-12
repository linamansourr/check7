
import './App.css';
import ContactList from './Components/ContactList';
import AddContact from "./Components/AddContact";
import {BrowserRouter as Router, Route, Switch } from "react-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path ="/" component={Home} ></Route>
          <Route path="/list" component={ContactList}></Route>
          <Route path="/add" component={AddContact}></Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
