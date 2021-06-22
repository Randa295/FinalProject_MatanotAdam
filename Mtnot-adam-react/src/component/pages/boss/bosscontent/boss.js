import React from 'react';
import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class Tabls extends React.Component {

  constructor() {
    super()
    this.state = { orgData: {}, editObj: {}, selectedRows: [], hover: false, show: false, showEdit: false, onHide: () => this.setState({ show: false }), toAdd: {} };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleEditInputChange = this.handleEditInputChange.bind(this);
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
  }

  handleTableCheck(rowIndex, checked) {
    if (checked) {
      this.state.selectedRows.push(rowIndex);
    } else {
      this.state.selectedRows.pop(rowIndex);
    }
  }

  handleTableDelete() {
    fetch('/boss',
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "ids": this.state.selectedRows })
      })
      .then(() => {
        const data = this.state.data.filter((item) => this.state.selectedRows.indexOf(item.id) === -1)
        this.setState({ "selectedRows": [], data })
      }
      );
  }

  getCheckBox(id) {
    if (this.state.selectedRows.indexOf(id) === -1) {
      return (
        <input className="form-check-input" type="checkbox" id={id}
          onClick={(event) => this.handleTableCheck(id, event.target.checked)} />
      )
    }
    return (
      <input checked className="form-check-input" type="checkbox" id={id}
        onClick={(event) => this.handleTableCheck(id, event.target.checked)} />
    )
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const id = target.id;
    let toAdd = this.state.toAdd
    toAdd[id] = value
    this.setState({
      toAdd
    });
  }

  handleEditInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const id = target.id;
    let editObj = this.state.editObj
    editObj[id] = value
    this.setState({
      editObj
    });
  }

  handleSearchInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleUpdateItem() {
    let editObj = this.state.editObj;
    fetch('/boss',
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 'editObj': this.state.editObj, 'ids': this.state.selectedRows })
      })
      .then(res => {
        let data = this.state.data;
        data.forEach((item) => {
          if (this.state.selectedRows.indexOf(item.id) !== -1) {
            this.props.data.headers.forEach((key) => {
              if (key.nameInDB !== 'id') {
                item[key.nameInDB] = editObj[key.nameInDB];
              }
            });
          }
        })
        this.setState({ show: false, editObj: {}, data, selectedRows: [] });
      }
      );
  }


  handleAddItem() {
    let toAdd = this.state.toAdd;
    fetch('/boss',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state.toAdd)
      })
      .then(res => res.json())
      .then((json) => {
        let data = this.state.data;
        toAdd['id'] = json.id;
        data.push(toAdd);
        this.setState({ show: false, toAdd: {}, data });
      }
      );
  }

  openEditModal() {
    if (this.state.selectedRows.length === 0)
      return;
    const firstSelectedRow = this.state.selectedRows[0];
    let editObj;
    this.state.data.forEach((item) => {
      if (item.id === firstSelectedRow) {
        editObj = item;
      }
    });
    this.state.editObj = editObj;
    return (
      <Modal id="modal"
        show={this.state.showEdit}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton onHide={() => this.setState({ showEdit: false, selectedRows: [] })}>
          <Modal.Title id="contained-modal-title-vcenter">
            Update
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.props.data.headers.map((item) => {
            return (
              <div class="form-group" key={item.nameInDB}>
                <label for={item.nameInDB}>{item.key}</label>
                <input type={item.type} class="form-control" id={item.nameInDB} placeholder={item.key} onChange={this.handleEditInputChange} value={this.state.editObj[item.nameInDB]} />
              </div>
            )
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => this.handleUpdateItem()}>Update</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  openAddModal() {
    return (
      <Modal id="modal"
        {...this.state}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            הוספה
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.props.data.headers.map((item) => {
            return (
              <div class="form-group" key={item.nameInDB}>
                <label for={item.nameInDB}>{item.key}</label>
                <input type={item.type} class="form-control" id={item.nameInDB} placeholder={item.key} onChange={this.handleInputChange} />
              </div>
            )
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => this.handleAddItem()}>הוספה</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  // toggleHover() {
  //   this.setState({ hover: !this.state.hover })
  // }

  clearFilter() {
    this.setState({ data: this.state.orgData });
  }

  filterData() {
    const key = this.state.searchIn;
    const text = this.state.search;
    if (!key || !text) {
      return;
    }
    const data = [];
    this.state.orgData.forEach((item) => {
      if (item[key].indexOf(text) !== -1) {
        data.push(item);
      }
    });
    this.setState({ data });
  }

  render() {
    if (!this.state.data) {
      this.setState({ data: this.props.data.data, orgData: this.props.data.data, searchIn: this.props.data.headers[0].nameInDB })
      return (<h1>Loading...</h1>)
    }
    return (
      <>
        <div className="row">
          <form class="form-inline">
            <input onChange={this.handleSearchInputChange} type="text" name="search" class="form-control mb-2 mr-sm-2" placeholder="Search" />
            <select onChange={this.handleSearchInputChange} name="searchIn" class="form-control mb-2 mr-sm-2" id="exampleFormControlSelect1">

              {this.props.data.headers.map((item) => {
                return (
                  <option key={item.id} value={item.nameInDB}>{item.key}</option>
                )
              })}
            </select>
            <button type="button" class="btn btn-light mr-sm-2" onClick={() => this.filterData()}>חפש</button>
            <button type="button" class="btn btn-danger mr-sm-2" onClick={() => this.clearFilter()}>נקה</button>
          </form>
        </div>
        <button type="button" className="btn btn-danger table-button" onClick={() => this.handleTableDelete()}>מחק</button>
        <button type="button" className="btn btn-light table-button" onClick={() => { this.setState({ showEdit: true }) }}>ערוך</button>
        <button type="button" className="btn btn-success table-button" onClick={() => { this.setState({ show: true }) }}>הוסף</button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              {this.props.data.headers.map((item) => {
                return (
                  <th key={item.id}>{item.key}</th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((item) => {
              return (
                <tr key={item.id}>
                  <td>
                    <div className="form-check" onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
                      {/* <div className="form-text">{item.id}</div> */}
                      {this.getCheckBox(item.id)}
                    </div>
                  </td>
                  {this.props.data.headers.map((header) => {
                    return (
                      <td>{item[header.nameInDB]}</td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </Table>
        {this.openAddModal()}
        {this.openEditModal()}
      </>
    )
  }
}

export default Tabls;