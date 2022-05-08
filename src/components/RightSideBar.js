import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import NewsComponent from './NewsComponent'

function RightSideBar(props) {
  let [NewsInfo,setNews] = React.useState([])
  useEffect(()=>{
    const FetchNews = async()=>{
        await fetch('https://newsapi.org/v2/top-headlines?country=Us&apiKey=dc2d56d3ed754a1295c8d6fc4f1a6125')
        .then((response)=>response.json())
        .then((data)=>{
          const News = data.articles.map((news)=>{
            return(
              {
                author:news.author,
                title:news.title,
                description:news.description,
                source:news.source.name,
                timepublished:news.publishedAt,
                photoUrl:news.urlToImage
              }
            )
          })
          setNews(News)
        })
        .catch((error)=>{
          console.log(error.message)
        })
    }
    FetchNews()
  },[])
  console.log(NewsInfo)
  return (
    <Container>
      <InputSection>
        <FontAwesomeIcon icon={faSearch}/>
         <input
          type='text'
          placeholder='Search Twitter'
         />
      </InputSection>
      <NewsSection style={props.appnewsletterstyles}>
        <h3>What's Happening</h3>
       {NewsInfo.map((newsdata)=>{
         return(
          <NewsComponent
            newsletterstyles = {props.appnewsletterstyles}
            title = {newsdata.title}
            imageUrl = {newsdata.photoUrl}
            Source = {newsdata.source}
            Author = {newsdata.author}
            TimePublished = {newsdata.timepublished}
          />
         )
       })}
      </NewsSection>
    </Container>
  )
}

export default RightSideBar
let Container = styled.div`
 flex-basis:25%;
 padding:10px 15px;
`
let InputSection = styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
 background-color:#f4f4f4;
 border-radius:20px;
 width:90%;
 height:40px;
 padding: 0 10px;
 input{
  border-radius:20px;
  width:90%;
  height:40px;
  outline:none;
  border:none;
  padding:0 5px;
  background-color:transparent;
 }
`
let NewsSection = styled.div`
 background-color:#f4f4f4;
 border-radius:10px;
 margin:2% 0;
 height:90vh;
 max-height:90vh;
 padding:5px 14px;
 overflow-x:hidden;
 overflow-y:scroll;
 ::-webkit-scrollbar{
   width:3px;
   border-radius:8px;
   background-color:#fff;
 }
 ::-webkit-scrollbar-track{
   width:3px;
   border-radius:8px;
   background-color:#fff;
 }
 ::-webkit-scrollbar-thumb{
   width:3px;
   border-radius:8px;
   background-color:#333;
 }
`