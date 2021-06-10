import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../part/header/header.js';
import  ContentHome from './contenthome/contenthome.js'
import Footer from'../../part/footer/footer.js';

class Home extends React.Component{
   constructor() {
    super()
    this.state = { data: [] };
}
componentDidMount() {
    fetch('/home')
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }

  render(){
    if (this.state.data.length==0)
       return (<p>error!</p>);

    return(
      <div className="container-fluid">
       <Header data={this.state.data.Header}/>
       < ContentHome data={this.state.data.Content}/>
       <Footer data={this.state.data.Footer}/>
      </div>
  )}
}


export default Home
