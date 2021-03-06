import React from 'react';
import Formsignupitem from './formsignupitem.js'


class Formsignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { displayMessage: '' };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit() {
    fetch('/signup',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "email": this.state.email, "password": this.state.password, "lname": this.state.lname, "fname": this.state.fname, "number": this.state.number })
      })
      .then(res => res.json())
      .then(json => {
        if (json.res !== true) {
          this.setState({ displayMessage: json.res })
        }
      }
      );
  }

  render() {
    const err = this.state.displayMessage !== null ? (<p>{this.state.displayMessage}</p>) : (<div></div>)
    const formComponents = this.props.data.map(item =>
      <Formsignupitem
        cName={item.cName}
        labelfor={item.labelfor}
        labeltitle={item.labeltitle}
        inputtype={item.inputtype}
        inputcName={item.inputcName}
        name={item.name}
        handleInput={this.handleInputChange}
      />)
    return (
      <div className="container loginContainer">
        {err}
        <h3>הירשמו וקבלו 15% הנחה</h3>
        {formComponents}
        <div className="form-group">
          <button onClick={() => this.handleSubmit()} className="mb-2 float-left btn btn-secondary">שלח</button>
        </div>
      </div>
    );
  }
}
export default Formsignup