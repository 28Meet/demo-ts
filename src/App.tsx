import React, {useEffect} from 'react';
import './App.css';
import Form from './Component/Form/Form';

// type arrayType = {
//   name : string,
//   address : string,
//   mail : string,
//   number : string,
//   gender : string,
//   city : string,
//   id : number
// }[]


function App() {

  // let array: arrayType = [
  //   {
  //     "name": "Meet Panchal",
  //     "address": "B-402, Sona hi sona, vastral",
  //     "mail": "meetpanchal@gmail.com",
  //     "number": "1234567890",
  //     "gender": "male",
  //     "city": "Ahmedabad",
  //     "id": 1
  //   },
  //   {
  //     "name": "darsil bhavsar",
  //     "address": "2695 O'Connell Extension",
  //     "mail": "darshil.bhavsar15@yahoo.com",
  //     "number": "6652097109",
  //     "gender": "male",
  //     "city": "Surat",
  //     "id": 2
  //   },
  //   {
  //     "name": "Vedant Panchal",
  //     "address": "Ranip",
  //     "mail": "vedantpanchal@gmail.com",
  //     "number": "1234567890",
  //     "gender": "male",
  //     "city": "Ahmedabad",
  //     "id": 3
  //   },
  //   {
  //     "name": "Hiren Patel",
  //     "address": "nikol",
  //     "mail": "hirenpatel@gmail.com",
  //     "number": "5647890123",
  //     "gender": "male",
  //     "city": "Rajkot",
  //     "id": 4
  //   },
  //   {
  //     "name": "Ashish Madaliya",
  //     "address": "Nikol",
  //     "mail": "ashish@gmail.com",
  //     "number": "1234567890",
  //     "gender": "male",
  //     "city": "Ahmedabad",
  //     "id": 5
  //   }
  // ]

  // useEffect(() => {
  //     localStorage.setItem("RECORD", JSON.stringify(array));
  // });

  return (
    <div className="App">
        <Form />
    </div>
  );
}

export default App;
