import React from 'react';
import Comments from './feed.js';

class Content extends React.Component{
  render(){
    return(
      <div className="ml-5">
       <Comments/>
      </div>
  )}
}


export default Content;