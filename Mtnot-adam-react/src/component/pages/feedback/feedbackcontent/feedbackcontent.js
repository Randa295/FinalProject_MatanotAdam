import React from 'react';
import Comments from './feed.js';

class Content extends React.Component{
  render(){
    return(
      <div className="ml-5">
        <Comments data={this.props.data} picture_url={this.props.picture_url}/>
      </div>
  )}
}


export default Content;