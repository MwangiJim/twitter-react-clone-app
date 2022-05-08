import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import React, { useEffect } from 'react';
import SignIn from './components/SignIn';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function App() {
  let[Button,setButton] = React.useState(false)
  let[user,setUser] = React.useState(null)
  let auth = getAuth();

  const DarkMode = ()=>{
    setButton((prevState)=>!prevState)
  }
  let buttonstyles = {
    marginLeft:Button?'30px':'',
    backgroundColor:Button?'#00acee':'#000'
  }
  let BtnStyles = {
    backgroundColor:Button?'#fff':'#000'
  }
  let AppStyles = {
    backgroundColor:Button?'#000':'#fff',
    color:Button?'#fff':'#000',
    border:Button?'1px solid #000':'1px solid #fff'
  }
  useEffect(()=>{
    onAuthStateChanged(auth,(AuthUser)=>{
      if(AuthUser){
        setUser(AuthUser)
        console.log('You are Logged in!!!')
      }
      else{
        setUser(null)
        console.log('You Are Logged out!!!')
      }
    })
  },[])
  return (
    <div className="App" style={AppStyles}>
       {user?<Home
       DarkModeHandler = {DarkMode}
       ButtonStyles = {buttonstyles}
       appstyles = {AppStyles}
       btnStyles = {BtnStyles}
       />: <SignIn/>}
    </div>
  );
}

export default App;
