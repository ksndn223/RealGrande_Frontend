import { useState } from "react";
import axios from "axios";

const SignUp = () => {
    
    let [formObj, setFormObj] = useState({name:"", email:"",password:"", phone:""});
    let [signedUp,setSignedUp] = useState(false);
    let [errorSigningUp, setErrorSigningUp] = useState('');
  
    let changeHandler =(e) =>{
      setFormObj({...formObj, [e.target.name]:e.target.value});
    }

    let handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formObj);
        //console.log("email is "+email+"  password is "+ password);
        //use fetch and send these values to middle ware 
        
        //submit to the backend server
        try{
         // this does not require headers to be changed, as we have app.use(express.json()) in index.js
           
        //  let resp = await axios.post(process.env.REACT_APP_BACKEND_URL+'signup',{...formObj}),{
        //         headers: {
        //        'Content-Type': 'multipart/form-data'
        //      }
        //   }); 
        let resp = await axios.post('http://localhost:4000/signup',{...formObj};
         console.log(resp);
         if(resp.data){
            setSignedUp(true);
            console.log(" successfully signedup");
         }
         else{
            setSignedUp(false);
            console.log(" Error while signing up");
          } 
        }
        catch(error){
            console.log(" error while signing up");
            console.log(error);
            setSignedUp(false);
            setErrorSigningUp(" Error while signing up");

        }
    };

    return ( 
        (signedUp)
        ?
        <div className="mb-4">
            <h5>Congratulations! You are now registered with us. Please login.</h5>
        </div>
        :
        <div className="d-flex justify-content-center mt-5">
        <form className="w-50" onSubmit={handleSubmit}>
         <div className="mb-3">
         <label htmlFor="name" className="form-label"> Name</label>
         <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              onChange={changeHandler}
            />
            </div>

            <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    id="phone"
                    onChange={changeHandler}
                />
            </div>


            <div class="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    onChange={changeHandler}
                />
            </div>

            <div className="mb-3">
         <label htmlFor="password" className="form-label"> Password</label>
         <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              onChange={changeHandler}
            />
            </div>
            
            <button type="submit" className="btn btn-dark">SignUp</button>
        </form>
       </div>
      

     );
};
 
export default SignUp;
