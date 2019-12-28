import React from 'react';

import './App.css';

import Button from './components/button';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      buttons: [
        ["pi","Pi"],
        ["equil","="],
        ["times","times"],
        ["divide","/"],
        ["minus","-"],
        ["clear","C"],
        ["point","."],
        ["plus","+"],
        ["one","1"],
        ["two","2"],
        ["three","3"],
        ["four","4"],
        ["five","5"],
        ["six","6"],
        ["seven","7"],
        ["eight","8"],
        ["nine","9"],
        ["zero","0"]
      ]
    }
    
  }


  render(){
    return(
      <div className="App">
      <div className="Display">display

      </div>
      <div className="Brand"></div>
      <div className="Button-pad">
        
    </div>
    </div>
    )
  }
  
}



export default App;
