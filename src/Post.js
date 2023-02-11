import {Avatar} from"@material-ui/core";
import { ThumbsUpDownOutlined } from "@mui/icons-material";
import React from 'react';
import"./Post.css";

function Post({name,description,message,photourl}) {
  return (
    <div className="post">
        <div className="post_header">
        <Avatar/>
        <div className="post_info">
        <h2>Ankit Shrivastava</h2>
        <P>Description</P>
    </div>
    </div>

    <div className="post_body">
        <p>Message goes here</p>
    </div>

    <div className="post_buttons">
        <InputOption Icon={ThumbsUpDownOutlined} title="Helped" color="gray"/>
        <InputOption Icon={ChatOutlined} title="Helped" color="gray"/>
        <InputOption Icon={ShareOutlined} title="Share" color="gray"/>
        <InputOption Icon={SendOutlined} title="Send" color="gray"/>
        
    </div>
    </div>
    
  )
}

export default Post;