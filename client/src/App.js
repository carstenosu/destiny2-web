import React from 'react';
import './App.css';
import { Grid } from "@material-ui/core/";
import PlayerSearch from './components/PlayerSearch';

export default function App() {

  return (
    <Grid container 
          spacing={0} 
          direction="column" 
          justify="center" 
          alignItems="center"
          style={{ minHeight: '100vh' }}
        >
      <Grid item xs={3}>
        <PlayerSearch/>
      </Grid>
    </Grid>
  )
}