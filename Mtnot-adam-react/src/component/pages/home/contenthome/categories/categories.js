import React from "react";
import Masony from "react-masonry-component";
import './categories.css';


class Galleryhome extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    if (this.props.data){
       return <i class="fa fa-spinner"></i>
  }
      const masonryOptions = {
        fitWidth: false,
        columnWidth:100,
        gutter: 90,
        itemSelector: ".photo-item",
      }
      return(
        <div id="category">
          <Masony  id="category"
            className={"photo-list"}
            elementType={"ul"}
            options={masonryOptions}
            disableImagesLoaded={false}
            updateOnEachImageLoad={false}

        >

        {this.props.categories.map((photo)=> (
          <div className="container" id="category">
          <li className={'photo-item'} id="category">
          <img src={photo.imgsrc} alt="" />
          <div className="overlay">
          <div className="title">
           <a href={photo.url} className="icon"> {photo.title}
            <i class="fa fa-chevron-left"></i>
            </a>
            </div>
            </div>
        </li>
        </div>
      ))}
    </Masony>
    </div>
    );
  }
}

export default Galleryhome;
