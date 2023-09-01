import React from 'react'
import user from '../data/user';




function Links(props){
    
  return (
    <div id="links">
        <h3> Links </h3>
        <a href={user.links.github}>GitHub</a>
        <a href={user.links.linkedin}>LinkedIn</a>
    </div>
  );
}

export default Links