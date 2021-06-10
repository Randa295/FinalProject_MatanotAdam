import React from "react";
import Cards  from '../../../../general/cards/cards.js'

class Favcards extends React.Component{
  constructor(props) {
   super(props);
}
render(){
  if (!this.props){
     return (<p> Cardsshop</p>)
}

    const favitems = this.props.data.map((oneitem)=>
    <Cards item={oneitem}/>
  )

  return(
    <div>
      <div className="row mt-2 justify-content-center">
      {favitems}
      </div>
    </div>
  )
    }
  }
export default Favcards
