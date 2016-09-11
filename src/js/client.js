import React from "react";
import ReactDOM from "react-dom";





class Layout extends React.Component{
  render(){
    return(
      <div>
        <Top/>
        <Base/>
      </div> 
      );
  }
}

var Top = React.createClass({
  render:function(){
    return(
      <div>
        <div style={firstStyle}>
          <h1 className="first" >JAVASCRIPTNYC</h1>
          <div className="grid">
            <div  class="col-md-4"><h2 className="why">Why JAVASCRIPTNYC?</h2><h3>Because javascript and its omnipotence has finally been realized and we are the ONLY javascript-focused conference in all of New York City</h3></div>
            <div class="col-md-4"><h2 className="what">What is in it?</h2><h3>Each year JAVASCRIPTNYC has a theme focused around javascript, ranging from the most common and helpful uses of javascript to the most cutting edge of what is coming next, with top guest speakers ready to share their thoughts and answer your questions.</h3></div>
            <div class="col-md-4"><h2 className="when">When will it be held?</h2><h3>Stay tuned, or sign up for more information</h3></div>
          </div>
        </div>
      </div> 
      )
  }
})



var Base = React.createClass({
  render: function() {
    return (
        <form action="process.php" method="POST"> 
          Name<input type="text" name="your_name" size="20" value="" required/>
          Email<input type="email" name="email" size="20" value="" required/>
          <input type="submit" value="submit" name="submit"/>
        </form>
    );
  }
});

var firstStyle ={
   color: 'black',
   fontFamily: "Courier New", 
}

var jsStyle = {
  backgroundImage: 'url("https://s3.amazonaws.com/s3.imagefinder.co/uploads/2016/01/20143942/boss-fight-free-high-quality-stock-images-photos-photography-new-york-city-skyline-960x640.jpg")',
  position:"absolute",
  WebkitBackgroundSize: 'cover', // note the capital 'W' here
  height:"100%",
  width:"100%",
  // WebkitTransition: 'all', // note the capital 'W' here
  // msTransition: 'all' // 'ms' is the only lowercase vendor prefix
};





const app = document.getElementById('app');



ReactDOM.render(<div style={jsStyle}><Layout/></div>, app);