import React from 'react';
import Formsignup from './formsignup/formsignup.js';

class Contentsignup extends React.Component{
   constructor(props) {
    super(props);
}

  render(){
    return(
      <div className="ml-5 justify-content-right">
       <Formsignup data={this.props.data} />
      </div>
  )}
}


export default Contentsignup