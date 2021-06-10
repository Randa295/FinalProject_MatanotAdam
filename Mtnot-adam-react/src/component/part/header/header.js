import React from 'react';
import LogoImage from "./logo/logo.js"
import Navbar2 from "./navbar2/navbar2";
import Navbar from "./navbar/navbar";
import './header.css'

class Header extends React.Component{
  

  render(){
    return(
      <div className="container-fluid">
      <div className="row mt-0">
        <Navbar2 data={this.props.data.Navbar2}/>
        </div>
        <h1 className="container-fluid mt-5"> משלוח חינם מעל 200₪</h1>
        <div className="row">
        <LogoImage/>
        <Navbar data={this.props.data.Navbar1}/>
      </div>
      </div>
  )}
}


export default Header