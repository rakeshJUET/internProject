import React,{Component} from 'react'
import {Navbar,Nav,NavDropdown,Form,FormControl,Button,Image} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/img/logo.png'
import Banner from './Banner.js'
import VideoCoder from './VideoCoder.js'

class Header extends Component{

  render(){
    return(
      <div style={{"background":"white"}} >
        <Navbar expand="lg" 
        // style={{"box-shadow": "0 3px 4px -2px rgba(0,0,0,1)",<Image src={logo} rounded height={100}/>"background":"#2193b0","background": "linear-gradient(to right, #000046, #1CB5E0)"}}
        style={{width:"90%",margin:"0 auto"}}
        >
          <Navbar.Brand href="#home" style={{color: "black",fontFamily:"Montserrat,sans-serif","lineHeight": "44px","fontWeight":"700",fontSize:"1.9rem",fontWeight:"bold"}}> NEWS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" >
              
            </Nav>
            <Nav className="mr-right" style={{"width":"35%"}} >
              <Nav.Link href="#home" style={{"margin-right":"2%","color":"black","fontWeight":"700",fontSize:"1.2rem",fontWeight:"bold"}}>HOME</Nav.Link>
              <Nav.Link href="#link" style={{"margin-right":"2%","color":"black","fontWeight":"700",fontSize:"1.2rem",fontWeight:"bold"}}>Categories</Nav.Link>
              <Nav.Link href="#link" style={{"margin-right":"2%","color":"black","fontWeight":"700",fontSize:"1.2rem",fontWeight:"bold"}}>Gallery</Nav.Link>
              <Nav.Link href="#link" style={{"margin-right":"2%","color":"black","fontWeight":"700",fontSize:"1.2rem",fontWeight:"bold"}}>Video</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {/* <Banner/> */}
        {/* <VideoCoder/> */}
      </div>


  )
  }

}

export default Header