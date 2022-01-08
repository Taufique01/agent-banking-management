import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'

import './../styles/authentication/loginpage.css'

export const  LoginPage =()=> {

  const history= useHistory()

  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
       
  const submitHandle=()=> {
    
  
    history.push('/add-customer')
  
  }


 


  
   
    return (
        <div class="bg-img">
        <div class="content">
        <header>Login Agent Banking</header>
       
          <div class="field">
            <span class="fa fa-user"></span>
            <input type="text" required placeholder="Email or Phone" onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div class="field space">
            <span class="fa fa-lock"></span>
            <input type="password" class="pass-key" required placeholder="Password"  onChange={(e)=>setPassword(e.target.value)}/>  
            <span class="show">SHOW</span>
          </div>
          <div class="pass">
            {/* <a href="#">Forgot Password?</a> */}
          </div>
          <div class="field">
          
            <input type="submit" value="LOGIN" onClick={submitHandle}/>
           
          </div>
      

        {/* <div class="login">Or login with</div>
        <div class="links">
          <div class="facebook">
            <i class="fab fa-facebook-f"><span>Facebook</span></i>
          </div>
          <div class="instagram">
            <i class="fab fa-instagram"><span>Instagram</span></i>
          </div>
        </div>
        <div class="signup">Don't have account?
          <a href="#">Signup Now</a>
        </div> */}
      </div>
      </div>
    )
}
