//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import House from './components/House';
import SearchFilter from './components/SearchFilter';
import SearchResults from './components/SearchResults';
import SearchedHouse from './components/SearchedHouse';
import {Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/Signup';
import PageNotFound from './components/PageNotFound';
import axios from 'axios';
import Inquiries from './components/Inquiries';


function App() {
  //state variable to store housesData ..
  // ..... this is used to send as props to components as and when needed

  let [housesData, setHousesData] = useState([]);

   //useEffect with [] , so that this block of code is called only once
  // getting the house info from public folder
  // using fetch and async -await
  // we worked on middleware to replace the "/houses.json" to url to middleware
   
  useEffect(() =>{ 
  
    
       let fetchData = async () => {
        // let response = await fetch("/houses.json");
        // let data = await response.json();
        // console.log(data);
      
        //Using Backend Server
        console.log("env:" + process.env.REACT_APP_BACKEND_URL);
        let response = await axios.get("http://localhost:4000/houses");
        //let response = await axios.get(process.env.REACT_APP_BACKEND_URL+"houses");
        console.log(response);
         setHousesData(response.data);
       }
       fetchData();
       //console.log(housesData[1]);
   },[])
  return (
    <div>
    <Header/>
    
    <SearchFilter allhouses= {housesData}/>
    
    
      <Routes>
 
        <Route path="/" element = {<House houseInfo ={housesData[7]}/>} />
        <Route path ="/searchresults/:county" element={<SearchResults allhouses={housesData}/>}/>
         <Route path="/searchedhouse/:id" element={<SearchedHouse allhouses={housesData}/>} />
         <Route path="/login" element={<Login/>} />
         <Route path="/signup" element={<SignUp/>} />
         <Route path="/inquiries" element={<Inquiries/>} />
         <Route path="*" element={<PageNotFound/>} />
        
         </Routes>
     <Footer/>
      
    </div>
     
  );
}

export default App;
