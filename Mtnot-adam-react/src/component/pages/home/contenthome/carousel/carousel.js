import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from 'react-bootstrap/Carousel'
import "./carousel.css";

class MyCarousel extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Carousel>
      {this.props.carousel.map((item)=>{
        return(
          <Carousel.Item interval={1000}>
            <center><img src={item.imgsrc}/></center>
            <Carousel.Caption>
              {item.caption}
            </Carousel.Caption>
          </Carousel.Item>
        )})}
      </Carousel>    );
  }
}
  export default  MyCarousel;
