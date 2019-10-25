import React, { Component } from 'react';
import { TextField } from "@material-ui/core/";

export default function PlayerSearch() {

   const [name, setName] = React.useState(null);

   const handleChange = (event) => {
      setName(event.target.value );
   };

   return (
      <form noValidate autoComplete="off">
         <TextField
            id="name"
            label="Name"
            value={name}
            onChange={handleChange}
            margin="normal"
            placeholder="Enter Player Name"
         />
      </form>
   )

}