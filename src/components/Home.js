import React from 'react'
import styled from 'styled-components'
import FeedSection from './FeedSection'
import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSideBar'

function Home(props) {
  return (
    <Container>
      <LeftSideBar
        Handler = {props.DarkModeHandler}
        spanStyles ={props.ButtonStyles}
        btStyles = {props.btnStyles}
      />
      <FeedSection
        appdarkstyles = {props.appstyles}
        />
      <RightSideBar
        appnewsletterstyles = {props.appstyles}
       />
    </Container>
  )
}

export default Home

let Container = styled.div`
 display:flex;
`