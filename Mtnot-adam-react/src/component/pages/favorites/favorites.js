import React from 'react';
import Header from '../../part/header/header.js';
import Content from './favcontent/favcontent.js'
import Footer from'../../part/footer/footer.js';

class Favorites extends React.Component{
  constructor() {
    super()
    this.state = { data: [] };
}
componentDidMount() {
    fetch('/favorits')
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }

  render(){
    if (this.state.data.length===0)
       return <i class="fa fa-spinner"></i> ;
    return(
      <div className="container-fluid">
      <Header data={this.state.data.Header}/>
       <Content data={this.state.data.Content}/>
       <Footer data={this.state.data.Footer}/>
      </div>
  )}
}


export default Favorites;
