import React,{Component} from 'react'
import {Container,Row,Col,Image,Button} from 'react-bootstrap'
import '../assets/csss/Footer.css'
import logo from '../assets/img/logo.png'
import Mail from '../assets/img/Mail.svg'
import Phone from '../assets/img/Phone.svg'

class Footer extends Component{


	render(){
		return(

				<div style={{backgroundColor:"white",width:"100vw",position:"absolute",bottom:"0%",height:"8vh",borderTopLeftRadius:"25px",borderTopRightRadius:"25px"}}>
					<div style={{display:"inline-flex",width:"100vw",alignItems:"center",height:"8vh"}}>
						<div style={{marginLeft:"5%",position:"absolute",left:"0%"}}><img src={Phone} /> +91- 123 456 7890</div>
						<div style={{position:"absolute",right:"50%"}}><img src={Mail} /> mail@example.com</div>
						<div style={{marginRight:"7%",position:"absolute",right:"0%"}}> &copy; Copyright 2021</div>
					</div>
					
				</div>
			)
	}

}

export default Footer