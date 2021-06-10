import React from 'react';
import './navbar2.css';


class Navbar2 extends React.Component {
  state={ clicked: false }

  handleClick = () =>{
  this.setState({ clicked: !this.state.clicked})
  }
  constructor(props){
    super(props);
    console.log(this.props)

  }

  render(){
    return(
      <div id="navbar2">
      <nav className="Navbaritems">
            <div className="menu-icon" onClick={this.handleClick}>
              <i className={this.state.clicked ? 'fa fa-times' : 'fa fa-ioxhost'}></i>
          </div>
            <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
              {this.props.data.navbar2.map((item, index) =>{
                return (
                  <li key={index}>
                    <a className={`${item.cName} btn`} href={item.url}>
                      <i className={item.icon}></i> 
                    </a>
                  </li>
                )
              })}

          </ul>
      </nav>
    </div>
          )
        }
}
export default Navbar2