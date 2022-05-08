import { faBarChart, faCalendarCheck, faChartBar, faGrinStars, faSmileBeam } from '@fortawesome/free-regular-svg-icons'
import { faChartColumn, faChartLine, faPhotoFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { AddPost } from '../redux/reducer/reducerSlice'
import TwitterPost from './TwitterPost'

function FeedSection(props) {
  let dispatch = useDispatch()
  let aTime = new Date().toLocaleTimeString()
  let{Twitterpost} = useSelector((state)=>state.twReducer)
  let[Post,setPost] = React.useState({
    input:''
  })
  const HandleInput =(e)=>{//function expressions
    setPost((prevPost)=>{
      return{
        ...prevPost,
        [e.target.name]:e.target.value
      }
    })
  }
   const SendPost =()=>{//function declaration
      if(Post.input){
         dispatch(AddPost({
             PostMessage:Post.input,
             TimeSent:aTime
         }))
         console.log(Twitterpost)
      }
   }
   let styles = {
     display:Post.input===''?'none':'block'
   }
 //  console.log(aTime)
  return (
    <Container>
       <Header>
          <h3>Home</h3>
          <FontAwesomeIcon icon={faGrinStars} className='sparkles'/>
       </Header>
       <InputSection>
        <div className='first'>
           <img src='/Images/1.jpg'/>
           <input
            type='text'
            placeholder='Whats Happening?'
            onChange={HandleInput}
            value={Post.input}
            name='input'
           />
        </div>
        <div className='second'>
           <Left>
              <FontAwesomeIcon icon={faPhotoFilm} className='icons'/>
              <p>GIF</p>
              <FontAwesomeIcon icon={faChartLine} className='icons'/>
              <FontAwesomeIcon icon={faSmileBeam} className='icons'/>
              <FontAwesomeIcon icon={faCalendarCheck} className='icons'/>
           </Left>
           <button onClick={SendPost} style={styles}>Tweet</button>
        </div>
       </InputSection>
       <div className='posts'>
          {Twitterpost.map((tweet)=>{
            return(
                  <TwitterPost
                  darkStyles ={props.appdarkstyles }
                    message = {tweet.PostMessage}
                  />
            )
          })}
      </div>
    </Container>
  )
}

export default FeedSection
let Container = styled.div`
 flex-basis:50%;
 .posts{
   height:75vh;
   max-height:75vh;
   overflow-y:scroll;
  ::-webkit-scrollbar{
    width:2px;
    border-radius:8px;
    background-color:#fff;
  }
  ::-webkit-scrollbar-track{
    width:2px;
    border-radius:8px;
    background-color:#fff;
  }
  ::-webkit-scrollbar-thumb{
    width:2px;
    border-radius:8px;
    background-color:#333;
  }
 }
`
let Header = styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
 padding:13px 12px;
 border:1px solid #f4f4f4;
 .sparkles{
   color:#00acee;
 }
`
let InputSection = styled.div`
 padding:15px 12px;
 border:1px solid #f4f4f4;
 border-radius:4px;
  .first{
    display:flex;
    justify-content:left;
    align-items:center;
    img{
      width:35px;
      height:35px;
      border:4px solid #00acee; 
      border-radius:50%;
    }
    input{
      border:none;
      padding:0 10px;
      outline:none;
      width:100%;
      height:35px;
      color:black;
      background-color:#f4f4f4;
      border-radius:20px;
      margin: 0 2%;
    }
  }
  .second{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin:2% 7%;
    button{
      background-color:#00acee;
      padding:12px 40px;
      color:#fff;
      border-radius:20px;
      cursor:pointer;
      outline:none;
      border:none;
    }
  }
`
let Left = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  .icons{
    color:#00acee;
    margin: 0 8%;
  }
  p{
    color:#00acee;
    border:2px solid #00acee;
    border-radius:5px;
    padding:0.5px 3px;
    font-size:9px;
  }
`