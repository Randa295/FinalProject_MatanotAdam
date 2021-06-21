import React from 'react';
import Formloginitem from './formloginitem.js'


class Formlogin extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = { displayMessage: null };
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  login() {
    fetch('/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "email": this.state.email, "password": this.state.password })
      })
      .then(res => res.json())
      .then(json => {
        if (json.res === true) {
          window.location.replace("/Home");
        } else {
          this.setState({ displayMessage: json.res })
        }
      }
      );
  }

  render() {
    const formComponents = this.props.data.map(item =>
      <Formloginitem
        key={item.cName}
        cName={item.cName}
        labelfor={item.labelfor}
        labeltitle={item.labeltitle}
        inputtype={item.inputtype}
        inputcName={item.inputcName}
        handleInputChange={this.handleInputChange}
        name={item.name}
      />)

    const err = this.state.displayMessage !== null ? (<div className="form-login-error">{this.state.displayMessage}</div>) : (<></>)
    return (
      <>
      <div className="container">
        <div className="container loginContainer">
          <h3>כדי להתחבר לאתר נא למלא את הפרטים</h3>
          {formComponents}
          <div className="form-group form-check login-form-check">
          <label className="form-check-label login-check-label">
           זכור אותי           </label>
           <input  className="form-check-input login-check-input" type="checkbox" name="remember" required/> 

        </div>
          <div className="form-group">
            <button onClick={() => this.login()} className="float-left mt-2 mb-2 btn btn-secondary">שלח</button>
          </div>
          
        { err}
        </div>
      </div>
     
    </>
    );
  }
}
export default Formlogin