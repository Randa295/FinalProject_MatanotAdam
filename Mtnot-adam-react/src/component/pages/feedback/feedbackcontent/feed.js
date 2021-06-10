import React from 'react';
import ReactDOM from 'react-dom';
import{Comment} from 'react-bootstrap';

class Comments extends React.Component{
  render() {
    return(

    <div className="container-flouid mt-5 mb-5">
      <div id="button">
        <div className="d-flex justify-content-center row">
            <div className="col-md-8">
                <div className="d-flex flex-column comment-section">
                    <div className="bg-white p-2">
                        <div className="d-flex flex-row user-info">
                        <img className="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40"/>
                            <div className="d-flex flex-column justify-content-start ml-2">
                            <span className="d-block font-weight-bold name">לין דגש</span>
                        </div>
                        <div className="mt-2">
                            <p className="comment-text">שירות ואיכות טובה,מחירים זולים,פשוט כיף לקנות משם</p>
                        </div>
                    </div>
                    <div className="bg-white">
                        <div className="d-flex flex-row fs-12">
                            <div className="like p-2 cursor">
                            <button type="button" className="id=button btn mr-sm-2" onClick={() => this.filterData()}> אהבתי <i class="fa fa-thumbs-o-up"></i> </button>
                            </div>
                            <div className="like p-2 cursor">
                            <button type="button" className="id=button btn mr-sm-2" onClick={() => this.filterData()}> תגובה <i class="fa fa-commenting-o"></i> </button>
                            </div>
                            <div className="like p-2 cursor">
                            <button type="button" className="id=button btn mr-sm-2" onClick={() => this.filterData()}> שתף <i class="fa fa-share"></i> </button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-light p-2">
                        <div className="d-flex flex-row align-items-start">
                          <img className="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40"/>
                          <textarea className="form-control ml-1 shadow-none textarea"></textarea>
                        </div>
                        <div className="mt-2 text-right">
                          <button className="id=button btn btn-sm shadow-none" type="button">פרסם תגובה</button>
                          <button className="id=button btn btn-sm ml-1 mr-3 shadow-none" type="button">ביטול</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
         </div>
        </div>
      )
   }
}
export default Comments