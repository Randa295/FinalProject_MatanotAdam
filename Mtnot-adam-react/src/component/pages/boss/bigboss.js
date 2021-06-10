import React from 'react';
import Header from '../../part/header/header.js';
import Content from './bosscontent/boss.js'
import Footer from'../../part/footer/footer.js';
import './boss.css';

class Boss extends React.Component{
  constructor() {
    super()
    this.state = { data: [] };
}
componentDidMount() {
    fetch('/boss')
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }

  render(){
    if (this.state.data.length==0)
       return (<p>error!</p>);

    return(
      <div className="container-fluid">
       <Header data={this.state.data.Header}/>
       <h1>רשימת ספקים</h1>
       <Content data={this.state.data.Content}/>
       <Footer data={this.state.data.Footer}/>
      </div>
    )
  }
}


export default Boss