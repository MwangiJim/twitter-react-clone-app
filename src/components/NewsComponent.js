import React from 'react'
import styled from 'styled-components'

function NewsComponent(props) {
  return (
    <Container style={props.newsletterstyles}>
      <div className='Left__side'>
          <p>World news.{props.TimePublished}</p>
          <h3>{props.title}</h3>
          <small>Trending with <i>#{props.Source}</i> and <i>{props.Author}</i></small>
      </div>
      <img src={props.imageUrl}/>
    </Container>
  )
}

export default NewsComponent
let Container = styled.div`
  border-bottom:1px solid gray;
  margin: 2% 0;
  display:flex;
  justify-content:space-between;
  .Left__side{
      text-align:left;
      p{
          color:gray;
          font-size:10px;
      }
      small{
          color:gray;
          i{
              color:#00acee;
          }
      }
      margin: 0 3%;
  }
  img{
      width:100px;
      height:80px;
      border-radius:20px;
      object-fit:cover;
  }
`