import React from 'react';
import  App from './pay/pay.js';
import {bootstrap} from 'react-bootstrap';

class Content extends React.Component{
  constructor(props) {
   super(props);
}

  render(){
    return(
      <div className="ml-5">
       < App data={this.props.data} />
      </div>
  )}
}


export default Content
