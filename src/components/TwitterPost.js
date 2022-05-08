import { faCommentAlt, faHeart } from '@fortawesome/free-regular-svg-icons'
import { faRetweet, faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Zoom } from 'react-reveal'

function TwitterPost(props) {
    let{UserCredentials} = useSelector((state)=>state.twReducer)
  return (
      <Zoom center>
    <Container style={props.darkStyles}>
       <First>
          <Left>
          <img src='/Images/1.jpg' className='img'/>
           <div className='details'>
              <div className='tag'>
                <h4>{UserCredentials.UserName}</h4>
                 <p>@jimmymwangi</p>
                 <small>.20s</small>
              </div>
              <h3>{props.message}<strong>divr.it/RdCJvb</strong></h3>
           </div>
          </Left>
          <img src='/Images/arrow.png' className='arrow'/>
       </First>
       <Second>
           <FontAwesomeIcon icon={faCommentAlt} className='icon'/>
           <FontAwesomeIcon icon={faRetweet} className='icon'/>
           <FontAwesomeIcon icon={faHeart} className='icon'/>
           <FontAwesomeIcon icon={faUpload} className='icon'/>
       </Second>
    </Container>
    </Zoom>
  )
}

export default TwitterPost
let Container = styled.div`
background-color:#fff;
border:1px solid #f4f4f4;
padding:13px 12px;
`
let First = styled.div`
 display:flex;
 justify-content:space-between;
 .arrow{
     width:10px;
     height:14px;
     transform:rotate(90deg);
 }
`
let Left = styled.div`
 display:flex;
 justify-content:left;
 .img{
   width:40px;
   height:40px;
   border-radius:50%;
 }
 .details{
     text-align:left;
     margin:0 2%;
     h3{
         font-weight:500;
         font-size:15px;
         margin:1% 0;
         strong{
             color:#00acee; 
             font-size:18px;
             font-weight:400;
         }
     }
 }
 .tag{
     display:flex;
     justify-content:space-between;
     align-items:center;
     h4{
         font-size:15px;
         text-transform:lowercase;
         letter-spacing:-1px;
     }
     p{
         color:gray;
         font-weight:500;
         font-size:17px;
         margin: 0 1%;
     }
     small{
         color:gray;
         font-weight:500;
         font-size:16px;
     }
 }
`
let Second = styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
 margin: 2% 8%;
`