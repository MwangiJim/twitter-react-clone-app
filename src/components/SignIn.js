import React from 'react'
import styled from 'styled-components'
import { db } from '../firebase'
import {getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect} from 'firebase/auth'
import { useDispatch } from 'react-redux';
import { Userdetails } from '../redux/reducer/reducerSlice';

function SignIn() {
    let auth = getAuth();
    let provider = new GoogleAuthProvider()
    let dispatch = useDispatch()

    const SignInWithGoogle =()=>{
       signInWithPopup(auth,provider)
       .then((result)=>{
           dispatch(Userdetails({
               UserName:result.user.displayName,
               Email:result.user.email,
               PhotoImage:result.user.photoURL
           }))
       })
    }
  return (
    <Container>
        <Box>
            <img src='/Images/download.png' className='logo'/>
            <h2>twitter</h2>
           <Button>
           <button>
               Sign in With Apple
                <img src='/Images/apple.png'/>
            </button>
            <button onClick={SignInWithGoogle}>
                Sign in with Google
                <img src='/Images/google.png'/>
            </button>
           </Button>
        </Box>
    </Container>
  )
}

export default SignIn
let Container = styled.div`
 width:100%;
 height:100vh;
 z-index:50;
 top:0;
 left:0;
 position:fixed;
 background-color:#fff;
`
let Box = styled.div`
 top:50%;
 left:50%;
 position:absolute;
 transform:translate(-50%,-50%);
 background-color:#fff;
 border-radius:8px;
 width:300px;
 padding:10px 14px;
 height:300px;
 box-shadow:5px 5px 12px #000;
 .logo{
     width:40px;
     margin:3% 40%;
 }
 h2{
     color:#00acee;
     text-align:center;
 }
`
let Button = styled.div`
 display:block;
 align-items:center;
 top:30%;
 position:relative;
 button{
     width:100%;
     border-radius:20px;
     background-color:transparent;
     height:40px;
     outline:none;
     border:none;
     cursor:pointer;
     box-shadow:3px 3px 8px #333;
      margin:3% 0;
     img{
         width:15px;
         margin:0;
     }
 }
`