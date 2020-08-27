import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SavedForms from "../SavedForms/SavedForms";
import EventForm from "../EventForm/EventForm";
import Header from "../Header/Header";

class MainContent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="MainContent">
        <Router>
          <Header/>
          <Switch>
            <Route path="/saved-forms">
              <SavedForms />
            </Route>
            <Route path="/">
              <EventForm />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
MainContent.propTypes = {};

export default MainContent;
