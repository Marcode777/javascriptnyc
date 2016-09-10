import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component{
  render(){
    return(
      <h1>Testing to see that it works!</h1>
      );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);