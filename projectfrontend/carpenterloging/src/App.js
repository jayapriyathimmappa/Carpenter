import { Routes,Route } from 'react-router-dom';
import './App.css';
import UserAction from './CarpenterData/UserAction';
import Login from './CarpenterData/Login';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Routes>
       <Route path='/Login' element={<UserAction className='App-header'/>} />
      <Route path='/' element={<Login/>} />
       </Routes>
      </header>
    </div>
  );
}

export default App;


































































































































































// import { useState } from 'react';
// import './App.css';


// function App() {

//   const adminuser={
//     email:"admin@gmail.com",
//     password:admin123
//   }
  
//   const[user,setUser]=useState({name:"",email:"",password:""});
//   const[error,setError]=useState("");

//   const login=details=>{
//     console.log(details)
//     if(details.email==adminuser.email&&details.password==adminuser.password
//       Console.log("logged in"));
  
//   }
//   const logout=details=>{
//     console.log("logout")

//   return ({
//     <div className='app'>
//         <div className='Welcome'>
//           <h2>welcome,<span>{user.name}</span></h2>
//           <button>Logout</button>
//       ):(
//         <loginform login={login}error={error}/>
//     </div>
//       )}
// }

// export default App;
