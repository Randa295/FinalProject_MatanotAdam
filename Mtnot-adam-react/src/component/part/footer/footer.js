import React from 'react';
import './footer.css';

class Footer extends React.Component {
  constructor(props) {
   super(props);
}


  state={ clicked: false }

  handleClick = () =>{
  this.setState({ clicked: !this.state.clicked})
  }

  render(){
    return(
      <div id="footer">
        <nav className="FooterItem">
              <div className="menu-icon" onClick={this.handleClick}>
            </div>
              <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                {this.props.data.map((item, index) =>{
                  return (
                    <li key={index}>
                    <a className={`${item.cName} btn`} href={item.url}>
                       <i className={item.icon}></i> {item.title}
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
export default Footer
