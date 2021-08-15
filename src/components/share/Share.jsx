/*eslint-disable*/
import React, { useContext, useRef, useState } from 'react'
import "./share.css"
import { EmojiEmotions, Label, PermMedia, Room } from '@material-ui/icons'
import {AuthContext} from '../../context/AuthContext'
import axios from 'axios'

function Share() {
    const {user} = useContext(AuthContext)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const desc = useRef()
    const [file,setFile] = useState(null)

    const submitHandler= async(e) => {
        e.preventDefault()
        const newPost = {
            userId: user._id,
            desc: desc.current.value
        }
        try {
           await axios.post("/posts", newPost)
        } catch (err) {
            
        }
    }
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg" src={user.profilePicture? PF+user.profilePicture : PF+"person/noAvatar.png"} alt=""/>
                    <input ref={desc} placeholder={"What's in your mind " + user.username + "?"} className="shareInput"/>
                </div>
                <hr className="shareHr"/>
                <form className="shareBottom" onSubmit={submitHandler}>
                    <div className="shareOptions">
                        <label htmlFor="file" className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon" />
                            <span className="shareOptionText">Photo or Video</span>
                            <input style={{ display: "none" }} type="file" id="file" accept=".png,.jpeg,.jpg" onChange={(e)=>setFile(e.target.files[0])}/>
                        </label>
                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareIcon" />
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="green" className="shareIcon" />
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
                            <span className="shareOptionText">Feelings</span>
                        </div>
                        {/* <button className="shareButton">Share</button> */}
                    </div>
                    <button className="shareButton" type="submit">Share</button>
                </form>
            </div>
        </div>
    )
}
// import "./share.css"
export default Share
