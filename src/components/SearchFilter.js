import { useNavigate } from "react-router-dom"

const SearchFilter = (props) => {
        
        //get distinct counties from housesData
         // get housedata -- done. got it from props
         // get counties from each element in array element
       
        let navigate = useNavigate();

        console.log(props.allhouses)
        let arrWithDupeCounties = props.allhouses.map((elem)=> {return elem.county})
        
        console.log(arrWithDupeCounties);
        // using set to remove duplicates
        const uniqueCounties =Array.from(new Set(arrWithDupeCounties));
        console.log(uniqueCounties);

        let changeHandler = (e) =>{  // e=synthetic event
            console.log(e);
            let countyName = e.target.value;
            // navigate to search results component
            navigate('/searchresults/'+ countyName);
        }

    return (
        <div className="row d-flex justify-content-center">
          <div className="col-sm-5 text-center">
            <select onChange={changeHandler}>
                <option value="select">Select County</option>
                {
                 uniqueCounties.map((countyName) => {
                    return <option key={countyName} value={countyName}>{countyName}</option>
                 })
                }
            </select>
          </div>
        </div>
     );
}
 
export default SearchFilter;