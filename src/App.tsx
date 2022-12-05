import React, {useEffect} from 'react';
import './App.css';
import Header from './Component/common/header/Header';
import Form from './Component/Form/Form';
import Table from './Component/UserDetails/Table/Table';

// type arrayType = {
//   name : string,
//   address : string,
//   mail : string,
//   number : string,
//   gender : string,
//   city : string,
//   permission : boolean,
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
  //     "permission" : true,
  //     "id": 1
  //   },
  //   {
  //     "name": "darsil bhavsar",
  //     "address": "2695 O'Connell Extension",
  //     "mail": "darshil.bhavsar15@yahoo.com",
  //     "number": "6652097109",
  //     "gender": "male",
  //     "city": "Surat",
  //     "permission" : true,
  //     "id": 2
  //   },
  //   {
  //     "name": "Vedant Panchal",
  //     "address": "Ranip",
  //     "mail": "vedantpanchal@gmail.com",
  //     "number": "1234567890",
  //     "gender": "male",
  //     "city": "Ahmedabad",
  //     "permission" : true,
  //     "id": 3
  //   },
  //   {
  //     "name": "Hiren Patel",
  //     "address": "nikol",
  //     "mail": "hirenpatel@gmail.com",
  //     "number": "5647890123",
  //     "gender": "male",
  //     "city": "Rajkot",
  //     "permission" : true,
  //     "id": 4
  //   },
  //   {
  //     "name": "Ashish Madaliya",
  //     "address": "Nikol",
  //     "mail": "ashish@gmail.com",
  //     "number": "1234567890",
  //     "gender": "male",
  //     "city": "Ahmedabad",
  //     "permission" : true,
  //     "id": 5
  //   }
  // ]

  // useEffect(() => {
  //     localStorage.setItem("RECORD", JSON.stringify(array));
  // });

  return (
    <div className="App">
      {/* <Header /> */}
      {/* <Table /> */}
        <Form editid={5} />
    </div>
  );
}

export default App;
