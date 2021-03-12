import React,{Component} from 'react';
import {Jumbotron,Button} from 'react-bootstrap'
import '../../assets/csss/specialCardProd.css'

class SpecialContentCard extends Component{

	constructor(props){
		super(props)
	}

	render(){
		return(
			<Jumbotron className="jumb">
			  <h1 className="t1">{this.props.title}<br/></h1>
			  <h1 className="t2">Small Tag Line About it</h1>
			  <p className="prg">A paragraph about the particular prod Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor</p> 
			<a href="#somlink" style={{color:'#017d4f'}}><h3 className="link1">Some link &rarr;</h3></a>
			</Jumbotron>

			)
	}

}

export default SpecialContentCard