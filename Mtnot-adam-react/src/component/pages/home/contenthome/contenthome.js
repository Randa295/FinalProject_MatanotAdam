import React from 'react';
import   Galleryhome from './categories/categories.js'
import VideoHome from './video/video.js'
import MyCarousel from './carousel/carousel.js'

class ContentHome extends React.Component{
  render(){
    return(
      <div className="ml-5">
      <img src= "../../../../img/img1.webp" alt=""/>
      <div className=" mr-5 mt-5 container-fluid justify-content-center">
      <div className="mr-5 justify-content-center">
        < Galleryhome categories={this.props.data.Categories}/>
      </div>
    </div>
    <div className="mt-5 mb-5 row justify-content-center">
    <MyCarousel carousel={this.props.data.Carousel}/>
    </div>
    <div className="mr-5 mt-5 row justify-content-center ">
    <h1> המוצרים המובלים של שבוע </h1>
    </div>
      < VideoHome/>
  </div>
  )}
}


export default  ContentHome