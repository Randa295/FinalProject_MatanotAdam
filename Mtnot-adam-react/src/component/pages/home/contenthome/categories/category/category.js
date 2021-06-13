import React from "react";
import Masony from "react-masonry-component";
import Header from '../../../../../part/header/header.js';
import Footer from '../../../../../part/footer/footer.js';
import "./gallery.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    let search = window.location.search;
    let params = new URLSearchParams(search);
    let cat = params.get('cat');
    this.state = { data: undefined, cat, show: false, onHide: () => this.setState({ show: false }) };
  }

  componentDidMount() {
    fetch(`/gallery?cat=${this.state.cat}`)
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }

  MyVerticallyCenteredModal() {
    return (
      <Modal id="modal"
        {...this.state}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal">
            <img id="imagemodal" src={this.state.modalImg} alt="" /> 
            <input  value={this.state.modalName} onChange={(event) => this.setState({ modalName: event.target.value })} />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body id="contained-modal">
          <input  value={this.state.modalPrice} onChange={(event) => this.setState({ modalPrice: event.target.value })} />
          <input class="form-control" type="number" value={this.state.modalQuantity} onChange={(event) => this.setState({ modalQuantity: event.target.value })} />

        </Modal.Body>
        <Modal.Footer>
          <Button id="contained-modal" onClick={this.state.onHide}>הוספה לסל</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  getContent() {
    if (Object.keys(this.state.data.Content.photos).length === 0){
        return (<p>This category doesn't exists</p>)
    }
    const picture = this.state.data.Content.photos.map(photo => (
      <li className={`photo-item`}
        onClick={() => this.setState(
          {
            show: true,
            modalName: photo.name,
            modalImg: photo.imgsrc, 
            modalPrice: photo.price, 
            modalQuantity: photo.quantity})}>
        <img src={photo.imgsrc} alt="" />
      </li>)
    )
      const masonryOptions = {
        fitWidth: false,
        columnWidth: 300,
        gutter: 30,
        itemSelector: ".photo-item",
      }

    return(
      <div>
        <Masony
          className={"photo-list"}
          elementType={"ul"}
          options={masonryOptions}
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}
        >{picture}
        </Masony>
        {this.MyVerticallyCenteredModal()}
      </div>
    );
  }

  render() {
    if (this.state.data === undefined){
        return <i class="fa fa-spinner"></i>
    }
    return (<div className="container-fluid">
      <Header data={this.state.data.Header} />
      {this.getContent()}
      <Footer data={this.state.data.Footer} />
      </div>)
  }
}

export default Gallery;