import React,{useState} from 'react';
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Create";
import SubscriptionIcon from "@material-ui/icons/Create";
import EventNoteIcon from "@material-ui/icons/Create";
import CalendarViewDay from "@material-ui/icons/Create";
import InputOption from "./InputOption";

function Feed() {
    const[posts,setPosts] =useState([]);

    constsendPost= e=>{ e.preventDefault()
    };


    }
  return (
    <div className="Feed">
     <div className="Feed_input"> 
     <CreateIcon/>
     <form>
        <input type="text" />
        <button onClick={sendPost}type= "submit">Send</button>
     </form>
     </div>
    <div className="Feed_inputOptions">
        <InputOptions Icon={ImageIcon} titles="Photo"
            color="blue"/>
            <InputOptions Icon={SubscriptionIcon} titles="Subscription"
            color="blue"/>
    <InputOptions Icon={EventNoteIcon} titles="Posts"
            color="blue"/>
    <InputOptions Icon={CalendarViewDay} titles="Write article"
            color="blue"/>
    </div>
    </div>
     {/Posts*/}
     {posts.map((post)=>(
        <Post/>
     ))}
     <Post name='Ankit Shrivastava' 
     description='This is a test'
     message='WOW this worked'/>
    </div>
    <div>
 <Post name='Ankit Shrivastava' 
    description='This is a test'
    message='WOW this worked'/>
    </div>
    div
    <Post name='Aryan Malhotra', 
    description=''
    message='Don't Consume Alchohol'/>
 

  );
}

export default Feed
