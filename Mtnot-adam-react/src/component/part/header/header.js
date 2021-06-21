import React from 'react';
import LogoImage from "./logo/logo.js"
import Navbar2 from "./navbar2/navbar2";
import Navbar from "./navbar/navbar";
import './header.css'

class Header extends React.Component{
  

  render(){
    return(
      
      <div className="container-fluid">
              <div className="row justify-content-end">
        <Navbar2 data={this.props.data.Navbar2}/>
        </div>
        <h1 className="container-fluid ml-0 mr-0 p-0"> משלוח חינם מעל 200₪</h1>
      <div className="row mb-0">
        <LogoImage/>
        <Navbar data={this.props.data.Navbar1}/>
      </div>
      <div className=" mt-0">
        <h2>Matanot Adam</h2>
        </div>
      </div>
  )}
}


export default Header