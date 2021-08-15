/*eslint-disable*/
import React, { useState, useEffect } from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import "./feed.css"
import axios from 'axios';
import {AuthContext} from '../../context/AuthContext'
// import {Posts} from "../../dummyData"


function Feed({username}) {
    const [posts,setPosts] = useState([])
    const {user} = useContext(AuthContext)
    // const [text,setText] = useState("")

    useEffect(()=>{
        const fetchPosts = async() => {
            const res = username? 
            await axios.get("/posts/profile/" + username): 
            await axios.get("posts/timeline/" + user._id)
            setPosts(res.data)
        }
        fetchPosts()
    },[username,user._id])
    return (
        <div className="feed">
           
            <div className="feedWrapper">
                <Share />
                {posts.map((p)=>(
                    <Post  post={p} key={p._id}/>
                ))}
                
                
            </div>
        </div>
    )
}

export default Feed
