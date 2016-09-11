import React from "react";
import ReactDOM from "react-dom";





class Layout extends React.Component{
  render(){
    return(
      <div>
        <Top/>
        <Middle/>
        <Base/>

      </div> 
      );
  }
}

var Top = React.createClass({
  render:function(){
    return(
      <div>
        <h1 className="first" >JAVASCRIPTNYC</h1>
        <img src={"https://s3.amazonaws.com/s3.imagefinder.co/uploads/2016/01/20143942/boss-fight-free-high-quality-stock-images-photos-photography-new-york-city-skyline-960x640.jpg"} />
        <form action="process.php" method="POST"> 
          Name<input type="text" name="your_name" size="20" value="" required/>
          Email<input type="email" name="email" size="20" value="" required/>
          <input type="submit" value="submit" name="submit"/>
        </form>
        <div>
        <p>text</p>
        </div>
      </div> 
      )
  }
})

var Middle = React.createClass({
  render:function(){
    return(
      <div className="grid">
      <div className="why" class="col-md-4"><h2>WHY JAVASCRIPTNYC?</h2><h3>Because javascript and its omnipotence has finally been realized and we are the ONLY javascript-focused conference in all of New York City</h3></div>
      <div className="what"class="col-md-4"><h2>What is in it?</h2><h3>Each year JAVASCRIPTNYC has a theme focused around javascript, ranging from the most common and helpful uses of javascript to the most cutting edge of what is coming next, with top guest speakers ready to share their thoughts and answer your questions.</h3></div>
      <div className="when"class="col-md-4"><h2>When will it be held?</h2><h3>Stay tuned, or sign up for more information</h3></div>
      </div>
      )
  }
})

var Base = React.createClass({
  render: function() {
    return (
      <p>some more text</p>
    );
  }
});


var jsStyle = {
  color: 'black',
  backgroundImage: 'url("https://s3.amazonaws.com/s3.imagefinder.co/uploads/2016/01/20143942/boss-fight-free-high-quality-stock-images-photos-photography-new-york-city-skyline-960x640.jpg")',
  WebkitTransition: 'all', // note the capital 'W' here
  msTransition: 'all' // 'ms' is the only lowercase vendor prefix
};


const app = document.getElementById('app');



ReactDOM.render(<div style={jsStyle}><Layout/></div>, app);