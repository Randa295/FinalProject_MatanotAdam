import React from 'react';
import Favcards from './favcard/favcards.js';
import {bootstrap} from 'react-bootstrap';

class Content extends React.Component{
  constructor(props) {
   super(props);
}

  render(){

    return(
      <Favcards data={this.props.data}/>
  )}
}


export default Content
