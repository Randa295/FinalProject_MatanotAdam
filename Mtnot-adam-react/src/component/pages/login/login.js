import React from 'react';
import Header from '../../part/header/header.js';
import Contentlogin from './contentlogin/contentlogin.js';
import Footer from'../../part/footer/footer.js';
import './login.css'

class Login extends React.Component{
  constructor() {
   super()
   this.state = { data: [] };
}
componentDidMount() {
   fetch('/login')
     .then(res => res.json())
     .then(json => this.setState({ data: json }));
 }

 render(){
   if (this.state.data.length==0)
      return (<p>error!</p>);

   return(
      <div id="formlogin" className= "login container-fluid">
      <Header data={this.state.data.Header}/>
       <Contentlogin  data={this.state.data.Content}/>
       <Footer data={this.state.data.Footer}/>
      </div>
  )}
}


export default Login;