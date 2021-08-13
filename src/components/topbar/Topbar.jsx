/*eslint-disable*/
import React from 'react'
import './topbar.css'
// import {Search} from '@material-ui/icons'

function Topbar() {
    return (
        <div className="topbarContainer">
                <div className="topbarLeft">
                    <span className="logo">MavikSocial</span>
                </div>
                <div className="topbarCenter">
                    <div className="searchbar">
                        <Search />
                        <input placeholder="Search for friend, post or individual" className="searchInput"/>
                    </div>
                </div>
                <div className="topbarRight">
                    <div className="topbarLinks">
                        <span className="topbarLink">Homepage</span>
                        <span className="topbarLink">Timeline</span>
                    </div>
                </div>
        </div>
    )
}

export default Topbar
