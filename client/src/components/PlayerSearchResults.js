import React from 'react';
import {List, ListItem, ListItemText} from '@material-ui/core';

const PlayerSearchResults = (props) => {

   return (
      <List>
         {
            props.players.map( player => {
               const system = player.membershipType = 1 ? 'Xbox' : 'PS4'
               return <ListItem key={player.membershipId}>
                  <ListItemText primary={player.displayName} secondary={system} />
               </ListItem>
            })
         }
      </List>
   )

}

export default PlayerSearchResults;
