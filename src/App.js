import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


// class App extends React.Component{
//   constructor(){
//     super()
//     this.state = {age: 20};
//   }
//   handleClick = () =>{
//     // console.log("button clicked")
//     let newAge = this.state.age + 1;
//     this.setState({age: newAge});
//   }
//   render(){
//     return (
//       <div style={ {marginLeft: 10} }>
//         <h3>Age is {this.state.age}</h3>
//         <button onClick = {this.handleClick}> Click me!!!</button>
//       </div>
//     )
//   } 
// };


function App() {
  const [state, setState] = useState( {age:20} );


  const handleClick = () => {
    let newAge = state.age +1;
    setState({age : newAge});
  }

  return (
    <div style={ {marginLeft: 10} }>
      <h3>Age is {state.age}</h3>
      <button onClick = {handleClick}> Click me!!!</button>
    </div>
  );
}

export default App;