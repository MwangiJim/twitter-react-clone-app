import { faBookmark, faListAlt, faMessage } from '@fortawesome/free-regular-svg-icons'
import { faBell, faHashtag, faHome, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getAuth } from 'firebase/auth'
import React from 'react'
import styled from 'styled-components'

function LeftSideBar(props) {
    let auth = getAuth()
  return (
    <Container>
        <Head>
        <img src='/Images/twitter.png' className='tw'/>  
        <h3>twitter</h3>
         <button onClick={props.Handler} style={props.btStyles}><span style={props.spanStyles}></span></button>
        </Head>
        <div className='line'>
             <FontAwesomeIcon icon={faHome} className='blueicon'/>
             <h3 className='twhome'>Home</h3>
        </div>
        <div className='line'>
             <FontAwesomeIcon icon={faHashtag} className='icon'/>
             <h3>Explore</h3>
        </div>
        <div className='line'>
             <FontAwesomeIcon icon={faBell} className='icon'/>
             <h3>Notifications</h3>
        </div>
        <div className='line'>
             <FontAwesomeIcon icon={faMessage} className='icon'/>
             <h3>Messages</h3>
        </div>
        <div className='line'>
             <FontAwesomeIcon icon={faBookmark} className='icon'/>
             <h3>Bookmarks</h3>
        </div>
        <div className='line'>
             <FontAwesomeIcon icon={faListAlt} className='icon'/>
             <h3>Lists</h3>
        </div>
        <div className='line'>
             <img src='/Images/user.png'/>
             <h3>Profile</h3>
        </div>
        <div className='line'>
             <img src='/Images/more.png'/>
             <h3>More</h3>
        </div>
        <button>Tweet</button>
        <button className='btn' onClick={()=>auth.signOut()}>LogOut</button>
    </Container>
  )
}

export default LeftSideBar
let Container = styled.div`
 flex-basis:20%;
 padding:10px 19px;
 .tw{
     width:23px;
     margin:0 3%;
 }
 .line{
     display:flex;
     justify-content:left;
     align-items:center;
     margin:4% 0;
     padding:7px 13px;
     img{
         width:16px;
     }
     h3{
         flex:0.8;
         margin:0 5%;
         text-align:left;
     }
     .icon{
         font-size:19px;
     }
     .blueicon{
         color:#00acee;
     }
     .twhome{
         color:#00acee;
     }
        span{
            background-color:#00acee;
            padding:4px 6px;
            color:#fff;
            display:block;
            border-radius:10px;
            font-size:9px;
            bottom:25px;
            position:relative;
            right:20px;
        }
 }
 button{
     background-color:#00acee;
     width:80%;
     border-radius:25px;
     color:#fff;
     outline:none;
     border:none;
     cursor:pointer;
     height:40px;
 }
 .btn{
     top:130px;
     position:relative;
 }
`
let Head = styled.div`
display:flex;
justify-content:left;
align-items:center;
color:#00acee;
button{
    width:50px;
    background-color:#000;
    height:10px;
    border-radius:10px;
    outline:none;
    border:none;
    margin: 0 5%;
    cursor:pointer;
    transition:0.5s;
    span{
        height:24px;
        width:24px;
        border-radius:50%;
        background-color:#000;
        display:block;
        bottom:7px;
        position:relative;
        transition:0.5s;
    }
}
`