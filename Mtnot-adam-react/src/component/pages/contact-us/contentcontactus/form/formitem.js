import React from "react";
import ReactDOM from 'react-dom';


class Formitem extends React.Component{
  constructor(props) {
   super(props);
}

  render() {
    return (
      <div className={this.props.cName}>
        <label for={this.props.labelfor}>
          <b>{this.props.labeltitle}</b>
        </label>
        <input
         type={this.props.inputtype}
         className={this.props.inputcName}
         placeholder={this.props.placeholder}
         name={this.props.name}
         required
        />
      </div>
    )
  }
}
export default Formitem
