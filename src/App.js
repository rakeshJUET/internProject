import React,{Component} from 'react';
import Header from './components/Header.js'
import Features from './components/Features.js'
import Footer from './components/Footer.js'
import Products from './components/Products.js'
import News from './components/News.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends Component {

  constructor(){
    super();

  }

  componentWillMount() {
    document.title = 'News'
  }

  render(){
    return (
      <Router>
      <div className="App" style={{"background":"rgb(233,236,237)","height":"100vh"}}>
      <Header/>
            <Features/>
            <Footer/>
        <Switch>
          <Route path="/source/:sourceId">
            <News/>
          </Route>
        </Switch>
      </div>
      
        
        {/* <div style={{"background":"rgb(233,236,237)"}}>
          <Products/>
          <Footer/>
        </div> */}
    </Router>
    );
  }
}

export default App;
