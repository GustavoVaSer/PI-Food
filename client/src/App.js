import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Detail, Form, Home, LandingPage } from "./view/views";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/detail/:id" component={Detail} />
        <Route exact path="/form" component={Form} />
      </Router>
    </div>
  );
}

export default App;
