import axios from 'axios';
import { useState } from "react";
import {useNavigate} from 'react-router-dom';

const Login = () => {
  
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [invalidCredentials, setinvalidCredentials] = useState(false);
     
    let navigate = useNavigate();

    const  emailHandler =(e) =>{
        setEmail(e.target.value);
        //console.log(email);
    }
    let pwHandler =(e) =>{
        setPassword(e.target.value);
        //console.log(password);
    }
    
    const submitHandler = async(e) =>{
        e.preventDefault();
        console.log("email: "+ email + " password: "+password);
        // fetch and send values
       try{
       let response = await axios.post("http://localhost:4000/login",{email:email,password:password});
       console.log(response);

       if(response.data.length >0 ){
         // for persistence
         sessionStorage.setItem("name", response.data[0].name);
         sessionStorage.setItem("email",response.data[0].email);
         sessionStorage.setItem("email",response.data[0].role);
        //check the role and take the user to appropriate page
        // if realtor, inquires, if not then home page
        (response.data[0].role == 'realtor') ? (navigate('/Inquiries')):navigate('/');
       }
       else{
        console.log(" invalid credentials");
        setinvalidCredentials(true);
       }
      }
       catch (err) {
        console.log(err);
       }
    }

    return ( 
       
       <div className='d-flex justify-content-center mt-3'>
        <form>
        {/* Another way of displaying the message */}
        {/* <div className='mb-3'> }
         <h5 className='text-danger> {invalidCredMsg} </h5> 
        </div> */}
         {invalidCredentials && ( <div className ='mb-3'> 
           <h5 className='text-danger'>invalid Credentials from &&, please try again</h5>
           </div>)
           }

         <div className='mb-3'>
         <label htmlFor='email' className='form-label'> Email</label>
         <input
              type='email'
              className='form-control'
              name='email'
              id='user-email'              
              placeholder='abc@email.com' 
              onChange={emailHandler}
            />
            </div>

            <div className='mb-4'>
         <label htmlFor='password' className='form-label'> Password</label>
         <input
              type='password'
              className='form-control'
              name='password'
              id='user-password'
              placeholder='Password' 
              onChange={pwHandler}
            />
            </div>
            
            <button type='submit' onClick={submitHandler} className='btn btn-success'>Login</button>

        </form>
       </div>
    
   

     );
}
 
export default Login;