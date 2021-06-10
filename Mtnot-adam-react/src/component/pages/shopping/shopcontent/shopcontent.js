import React from 'react';
import  Shop  from './shopcards/shop.js';

class Content extends React.Component{
  constructor(props) {
   super(props);
}

  render(){
    return(
      <div className="ml-5">
       < Shop data={this.props.data} />
      </div>
  )}
}


export default Content
