import React from 'react';
import Header from '../../part/header/header.js';
import Content from './feedbackcontent/feedbackcontent.js'
import Footer from'../../part/footer/footer.js';
import  './feedback.css'

class FeedBack extends React.Component{
  constructor() {
    super()
    this.state = { data: [] };
}
componentDidMount() {
    fetch('/feedback')
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }

  render(){
    if (this.state.data.length==0)
       return (<p>error!</p>);
    return(
      <div className="container-fluid">
      <Header data={this.state.data.Header}/>
        <Content data={this.state.data.Content} picture_url={this.state.data.picture_url}/>
       <Footer data={this.state.data.Footer}/>
      </div>
    )
  }

}


export default  FeedBack;