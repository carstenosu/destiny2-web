import React, { useState } from 'react';
import { TextField } from "@material-ui/core/";
import PlayerSearchResults from './PlayerSearchResults';
import axios from 'axios';

export default function PlayerSearch() {

   const [name, setName] = useState('');
   const [players, setPlayers] = useState([]);

   const handleChange = event => {
      setName( event.target.value );
   };

   const handleSubmit = event => {
      event.preventDefault();

      axios.get(`http://localhost:9000/destiny/search/${name}` )
      .then( res => {
         setPlayers(res.data);
      }).catch( error => {

      }).finally()
   }

   return (
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
         <TextField
            id="name"
            value={name}
            onChange={handleChange}
            margin="normal"
            placeholder="Enter Player Name"
         />
         <PlayerSearchResults players={players} />
      </form>
   )

}