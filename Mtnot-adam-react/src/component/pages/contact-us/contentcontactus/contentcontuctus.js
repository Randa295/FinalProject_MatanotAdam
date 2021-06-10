import React from 'react';
import Form from './form/form.js';

class Content extends React.Component{
  constructor(props) {
   super(props);
}

  render(){
    return(
      <div id="form" className="contactus container-fluid ">
       <Form  data={this.props.data}/>

      </div>
  )}
}


export default Content
