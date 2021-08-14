/*eslint-disable*/
import React from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import "./feed.css"
import axios from 'axios';
// import {Posts} from "../../dummyData"
function Feed() {
    const [posts,setPosts] = useState([])
    const [text,setText] = useState("")


    useEffect(()=>{
        axios.get()
    },[])
    return (
        <div className="feed">
           
            <div className="feedWrapper">
                <Share />
                {/* {Posts.map((p)=>(
                    <Post  post={p} key={p.id}/>
                ))} */}
                
                
            </div>
        </div>
    )
}

export default Feed
