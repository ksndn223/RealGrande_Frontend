import axios from "axios";
import { useState } from "react";

const Inquiry = (props) => {

// Will need the useState and onChangeHandler

 let [inquiryObject,setInquiryObject] = useState({email:"",name:"",mobilenum:"",remarks:""});
 let [submittedInquiry, setsubmittedInquiry] = useState(false);
 
 let onChangeHandler =(e) =>{
    setInquiryObject({...inquiryObject,[e.target.name]:e.target.value});
    console.log(inquiryObject);
    
 }
 
 // need to address to inquiryObject
 let onClickHandler = async() => {
    try{
      inquiryObject = {...inquiryObject,address:props.address};
      //inquiryObject = {...inquiryObject};
      console.log(inquiryObject);
     let response = await axios.post('http://localhost:4000/addinquiry',{inquiryObject},{
      headers:{
        'Content-Type': 'multipart/form-data'
      }
     });
   
   
     console.log(response.data);
   // console.log(" inquiry submitted");
     
     if(response.data){
      setsubmittedInquiry(true);
      console.log(" inquiry is successful");
      }
     else{
      setsubmittedInquiry(false);
      console.log(" error with inquiry");
    } 

    }
    catch(err){
      console.log(" error while adding inquiry");
      setsubmittedInquiry(false);
    }
 };
  
    return ( 
      (submittedInquiry)
       ?
         <div className="mt-3">
         <h5> Thanks for submitting! Our realtor will get in touch with you soon!</h5>
          </div>
       :
      <div>
        <form className="w-50" onSubmit={onClickHandler}>
        <div className="mb-2">
          <label htmlFor="email" className="form-label">Email</label>
          <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="abc@mail.com"
                    onChange={onChangeHandler}
                />
      
        </div>

        <div className="mb-2">
          <label htmlFor="name" className="form-label">Name</label>
          <input
                    type="name"
                    className="form-control"
                    name="name"
                    id="name"
                    placeholder=""
                    onChange={onChangeHandler}
                />
      
        </div>

        <div className="mb-2">
          <label htmlFor="mobilenum" className="form-label">Mobile</label>
          <input
                    type="text"
                    className="form-control"
                    name="mobilenum"
                    id="mobilenum"
                    placeholder=""
                    onChange={onChangeHandler}
                />
      
        </div>

        <div className="mb-2">
          <label htmlFor="address" className="form-label">Address</label>
          <input
                    type="text"
                    className="form-control"
                    name="address"
                    id="address"
                    placeholder=""
                    onChange={onChangeHandler}
                />
        </div>
        <div className="mb-2">
          <label htmlFor="remarks" className="form-label">Remarks</label>
          <input
                    type="text"
                    className="form-control"
                    name="remarks"
                    id=""
                    aria-describedby="HelpId"
                    placeholder=""
                    onChange={onChangeHandler}
                />
      
        </div>
        
        <button type="submit" className="btn btn-primary">
           Submit </button>
       </form>
    </div>
    );
}
 
export default Inquiry;