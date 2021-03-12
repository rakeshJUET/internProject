import React,{Component} from 'react';
import {Card,Button} from 'react-bootstrap'
import '../../assets/csss/specialCardImage.css'

class SpecialContentImg extends Component{

	constructor(props){
		super(props)
	}

	render(){
		return(
			<Card className="cardImageHold">
			    <Card.Img className="cardImageHold2" variant="top" src={this.props.imgLink} />
			</Card>

			)
	}

}

export default SpecialContentImg