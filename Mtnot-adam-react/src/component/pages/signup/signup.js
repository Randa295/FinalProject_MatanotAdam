import React from 'react';
import Header from '../../part/header/header.js';
import Contentsignup from './signupcontent/signupcontent.js';
import Footer from'../../part/footer/footer.js';
import  './signup.css';

class Signup extends React.Component{
  constructor() {
    super()
    this.state = { data: [] };
}
componentDidMount() {
    fetch('/signup')
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }

  render(){
    if (this.state.data.length===0)
       return<i class="fa fa-spinner"></i>;
    return(
      <div className="signup container-fluid">
      <Header data={this.state.data.Header}/>
       <Contentsignup data={this.state.data.Content}/>
       <Footer data={this.state.data.Footer}/>
      </div>
  )}
}


export default Signup;
