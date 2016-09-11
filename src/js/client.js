import React from "react";
import ReactDOM from "react-dom";






class Layout extends React.Component{
  render(){
    return(
      <div>
        <Top/>
        <Base/>
        <Twitter/>
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
            <div  class="col-md-4"><h2 className="why">Why JAVASCRIPTNYC?</h2><h3>Because javascript has matured and its omnipotence has finally been realized and we are the ONLY javascript-focused conference in New York City.</h3></div>
            <div class="col-md-4"><h2 className="what">What is in it?</h2><h3>Each year JAVASCRIPTNYC has a theme focused around javascript, ranging from the most common and helpful uses of javascript to the most cutting edge of what is coming next, with top guest speakers ready to share their thoughts and answer your questions.</h3></div>
            <div class="col-md-4"><h2 className="when">When will it be held?</h2><h3>Stay tuned, or sign up for more information.</h3></div>
          </div>
        </div>
      </div> 
      )
  }
})



var Base = React.createClass({
  getInitialState: function(){
    return{hovered: false};
  },
  style: function(){
    if (this.state.hovered){
      return {backgoundColor: "white"} 
    } else { return {backgroundColor: "gray"}
    } 
  },
  onMouseOver: function(){
    this.setState({hovered:true})
  },
  onMouseOut: function(){
    this.setState({hovered: false})
  },

  render: function() {
    return (
        <div>
          <input type="text"  name="your_name" size="20" value="" required placeholder="name"/>
          <input type="text"  name="email" size="20" value="" required placeholder="email" />
          <input type="submit" onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} style={this.style()}value="submit" name="submit"/>
        </div>
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

var Twitter = React.createClass({
    render: function(){
        return React.DOM.iframe({
            src               : "//platform.twitter.com/widgets/follow_button.html?screen_name=JavaScriptNYC&show_count=false&show_screen_name=false",
            scrolling         : "no",
            frameBorder       : "0",
            allowTransparency : "true"
        })
    }
});






const app = document.getElementById('app');

ReactDOM.render(<div style={jsStyle}><Layout/></div>, app);