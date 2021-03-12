import React,{Component} from 'react'
import {Container,Row,Col,Image,Button} from 'react-bootstrap'
import Typer from './Typer.js'

import '../assets/csss/Banner.css'

class Banner extends Component{



	render(){
		return(

				<Container fluid="md" className="cont">
				  <Row>
				    <Col >
						<div style={{"font-family": "merriweather,open sans,sans-serif","font-weight": 700}}>
						    <h1 className="head1">Create <u style={{"color": "rgba(0,0,0,0.7)"}}>realistic</u> Voice Over audio for your</h1>
						    <Typer
							    dataText={[  
							      'Blogs',
							      'Articles',
							     
							    ]} 
							  /> 
							  <h5 className="head5">Simply edit text and create high quality <b>Voice Over</b> audio for your videos,
						     blog posts, podcasts, books and almost anything using 100+ voices.</h5>
					     </div>
					     <Button className="btnMy">Start 14Day Trial Free</Button>
				     </Col>
				     <Col xs lg="4"><Image src={"https://play.ht/assets/img/product/eng.png"}  style={{"height":"40vh","width":"20vw","float":"right","margin-top":"20vh"}}/></Col>

				  </Row>
				</Container>
			)
	}

}

export default Banner