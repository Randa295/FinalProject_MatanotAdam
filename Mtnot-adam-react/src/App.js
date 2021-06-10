import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './component/pages/home/home.js';
import Contactus from './component/pages/contact-us/contactus.js';
import Boss from './component/pages/boss/bigboss.js'
import Favorites from './component/pages/favorites/favorites.js'
import Shopping from './component/pages/shopping/shopping.js'
import Payment from './component/pages/payment/payment.js'
import LogIn from './component/pages/login/login.js'
import Signup from './component/pages/signup/signup.js'
import Aboutus from './component/pages/aboutus/aboutus.js'
import FeedBack from './component/pages/feedback/feedback.js'
import Gallery from './component/pages/home/contenthome/categories/category/category.js'
import './App.css'

class App extends React.Component{
  render() {
  return (
    <BrowserRouter>
      <div>
          <Switch>
           <Route path="/" component={Home} exact/>
           <Route path="/Home" component={Home} exact/>
           <Route path="/Contactus" component={Contactus}/>
           <Route path="/BossOnly" component={Boss}/>
           <Route path="/Fav" component={Favorites}/>
           <Route path="/Shop" component={Shopping}/>
           <Route path="/Payment" component={Payment}/>
           <Route path="/LogIn" component={LogIn}/>
           <Route path="/Signup" component={Signup}/>
           <Route path="/Aboutus" component={Aboutus}/>
           <Route path="/FeedBack" component={FeedBack}/>
           <Route path="/Gallery" component={Gallery}/>

         </Switch>

      </div>
    </BrowserRouter>
    );
  }
}

export default App;
