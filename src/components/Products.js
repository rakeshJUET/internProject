import React,{Component} from 'react';
import {Container,Row,Col,Image,Button} from 'react-bootstrap'
import prods from '../assets/files/productList.js'
import '../assets/csss/Products.css'

let initialState = {
	firstContent :[],
	secondContent :[]
}

class Products extends Component{

	constructor(){
		super();
		this.state = initialState;
	}

	componentDidMount(){
		let cont1 = [];
		let cont2 = [];

		//let prodCart = [{content:'c1',image:'i1'},{content:'c2',image:'i2'}]
		let alt = true;

		prods.map((cont)=>{
			if(!alt){
				cont1.push(cont.content)
				cont2.push(cont.image)
				alt = true;
			}
			else{
				cont1.push(cont.image)
				cont2.push(cont.content)
				alt = false;
			}
		})

		this.setState({firstContent:cont1,secondContent:cont2})


	}

	render(){
		console.log(this.state)
		console.log(prods)
		return(

			<Container className="container1" >
			 <h1 className="head">Some of Our Awesome Products 😍</h1>
				  <Row xs={1} md={2} className="rows1">
				    <Col className="column1">{this.state.firstContent}</Col>
				    <Col className="column1">{this.state.secondContent}</Col>
				  </Row>
			</Container>

			)
	}

}


export default Products;