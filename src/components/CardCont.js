import React,{Component} from 'react'
import {Card,Button} from 'react-bootstrap'

class MyCard extends Component{

	constructor(props){
		super(props);
		
	}

	render(){
		return(

				<Card style={{ width: '18rem','margin-right':'5%','box-shadow': '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)','margin-bottom':'2%'}}>
				  <center>{this.props.icon}</center>
				  <Card.Body>
				    <Card.Title style={{'text-align':'center'}}>{this.props.title}</Card.Title>
				    <Card.Text>
				     {this.props.subTitle}
				    </Card.Text>
				   
				  </Card.Body>
				</Card>

			)
	}

}

export default MyCard;