import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Header = () => {
    
    let navigate = useNavigate(); 

    let loginHandler=()=> {
        navigate('/login');
    }

    let logoutHandler=()=> {
        sessionStorage.clear();
        navigate('/');
    }
   
    let signupHandler = ()=> {
        navigate('/signup');
    }

    return ( 
        <div className="row bg-primary align-items-center">
            <div className="col-sm-3">  
             <Link to="/"> <img className="w-25" src="/imgs/logo.png" alt="RealGrande"/>
             </Link>
              </div>
            <div className="col-sm-5">
                <h5>Your real estate destination!</h5>  
                </div>
            <div className="col-sm-4"> 
            {
                (sessionStorage.getItem("name"))
                ?
                <button onClick={logoutHandler} className="btn btn-success mx-3">Logout </button>
                :
                <>
                 <button onClick={loginHandler} className="btn btn-success mx-3">Login </button> 
                 <button onClick={signupHandler} className="btn btn-success"> SignUp</button> 
                </>
            }
           
            </div>
        </div>
     );
}
 
export default Header;