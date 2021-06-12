import React from 'react';
import Header from '../../part/header/header.js';
import Footer from'../../part/footer/footer.js';
import  './about.css'

class Aboutus extends React.Component{
  constructor() {
    super()
    this.state = { data: [] };
}
componentDidMount() {
    fetch('/aboutus')
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }

  render(){
    if (this.state.data.length===0)
       return<i class="fa fa-spinner"></i> ;
    return(
      <div className="container-fluid">
      <Header data={this.state.data.Header}/>
       <h2>אודותינו </h2>
       <p> חנות שלנו נפתחה בשנת 2016
       החנות מכילה  מגוון רחב של מתנות וכלי בית, מצעים,מארזי מתנות ודברי ימי הולדת</p>
       <Footer data={this.state.data.Footer}/>
     </div>
  )}
}


export default Aboutus;
