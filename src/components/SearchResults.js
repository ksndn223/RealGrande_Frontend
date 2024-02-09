import { useParams } from "react-router-dom";
import SearchResultsRow from "./SearchResultsRow";

const SearchResults = (props) => {

    let paramsObj = useParams();
    //console.log(paramsObj);
    console.log(props.allhouses);
   let filteredHousesArray= props.allhouses.filter((house) => (paramsObj.county == house.county));
    console.log(filteredHousesArray);

    return ( 
        
        

        <div>
            <h4> Search Results Here</h4>

        <div className="table-responsive">
       
         <table className="table table-primary">
            <thead>
                <tr>
                    <th scope="col">Address</th>
                    <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
               {
                filteredHousesArray.map(item => {
                return (   
                  <SearchResultsRow key={item._id} filteredhouse={item} />
                    
                )
               })
            }
                
              </tbody>
          </table>
        </div>
         
        </div>
     );
}
 
export default SearchResults;