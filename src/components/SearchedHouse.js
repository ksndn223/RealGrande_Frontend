import { useParams } from "react-router-dom";
import House from "./House";

const SearchedHouse = (props) => {

    // get the id from params in location bar
    let paramsObj = useParams();

    // compare it with the props allhouses and get the house, use find
    let searchedHouseObj = props.allhouses.find((house) => { return paramsObj.id == house._id});
     console.log(searchedHouseObj);
    return ( 
        <div>
        <h1> Searched House!</h1>
        <House houseInfo={searchedHouseObj} showInquiry={true}/>
        </div>
     );
}
 
export default SearchedHouse;