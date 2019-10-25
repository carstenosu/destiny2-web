import React, { Component } from 'react';
import './App.css';
import { Grid } from "@material-ui/core/";
import PlayerSearch from './components/PlayerSearch';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/destiny")
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <Grid container spacing="0" direction="column" justify="center" alignItems="center">
        <Grid item xs="3">
          <PlayerSearch/>
        </Grid>
      </Grid>
    )
  }
}

export default App;
