import axios from "axios";
import { useEffect, useState } from "react";

const Inquiries = () => {
  
    let [allInquiries,setAllInquiries] = useState([]);

    useEffect(() =>{
         let fetchData = async () =>{
        try{
            let response = await axios.get(process.env.REACT_APP_BACKEND_URL+"inquiries");
            //let response = await axios.get("http://localhost:4000/inquiries");
            let data = await response.data;
            setAllInquiries(data);
            console.log(allInquiries);
        }
        catch(err){
          console.log(" error while fetching inquiries");
          console.log(err);
        }
     }
     fetchData();
    }
    ,[]);

    return ( 
    <div className="row">
        <h5> Inquiries</h5>
       <div className="table-responsive">
        
    <table className="table table-primary">
      <thead>
          <tr>
             <th scope="col">Address</th>
             <th scope="col">Name</th>
             <th scope="col">Email</th>
             <th scope="col">Mobile Number</th>
             <th scope="col">Comments</th>
          </tr>
      </thead>
      <tbody>
          {
            allInquiries.map((inquiry) =>{
              return(
                <tr className="">
                 <td scope="row"> {inquiry.address}</td>
                 <td>{inquiry.name}</td>
                 <td>{inquiry.mobilenum}</td>
                 <td>{inquiry.remarks}</td>
                </tr>
              )
            })
          }

        </tbody>
    </table>
    </div>
        
 </div>
     );
}
 
export default Inquiries;
