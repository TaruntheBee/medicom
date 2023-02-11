import React from 'react'
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";

function Feed() {
  return (
    <div className="Feed">
     <div className="Feed_inputcontainer"> 
     <CreateIcon/>
     <form>
        <input type="text" />
        <button type="submit">Sent</button>
     </form>
     </div>
 
    </div>

  )
}

export default Feed
