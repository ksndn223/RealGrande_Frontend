import { useState } from "react";
import Inquiry from "./Inquiry";

const House = (props) => {

   let [showInquiry, setShowInquiry] = useState(true);

   console.log(props.houseInfo);

// Message to give a status if there is an error
if(!props.houseInfo){
    return <h4>........loading</h4>
}
  
const imagePath =`/imgs/${props.houseInfo.photo}`
   
    return ( 
        
        <div className="row">
           <div className="col-sm-7">
            {props.houseInfo.address}
            </div>
           <div className="col-sm-5">
             Price: USD {props.houseInfo.price}
             </div>
        
            <div className="col-sm-7"> 
            <img className="img-fluid" src={imagePath} alt="house"/>
             </div>

             <div className="col-sm-5">
                <p> 
                  {props.houseInfo.description} 
                </p>
             {/* for now show the inquiry form, once login works, check and show only when logged in */}
               { showInquiry && <Inquiry/> }

             </div>
        </div>

     );
}
 
export default House;