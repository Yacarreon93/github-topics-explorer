import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import TopicDetails from "./scenes/TopicDetails";
import TopicExplorer from "./components/TopicExplorer";

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <h1 className="my-3">Github Topic Explorer</h1>
          <Switch>
            <Route exact path="/:topicName" component={TopicDetails} />
            <Route component={TopicExplorer} />
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
