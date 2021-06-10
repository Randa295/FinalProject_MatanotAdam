import React from 'react';
import Formsignupitem from './formsignupitem.js'


class Formsignup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const formComponents = this.props.data.map(item =>
      <Formsignupitem
        cName={item.cName}
        labelfor={item.labelfor}
        labeltitle={item.labeltitle}
        inputtype={item.inputtype}
        inputcName={item.inputcName}
        name={item.name}
      />)
    return (
      <div className="container loginContainer">
        <h2>הירשמו וקבלו 15% הנחה</h2>
        {formComponents}
        <div class="form-group">
          <button class="mb-2 float-left btn btn-secondary">שלח</button>
        </div>
      </div>
    );
  }
}
export default Formsignup