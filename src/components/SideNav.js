import React,{Component} from 'react'
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import {Card,Button} from 'react-bootstrap'
import SourceText from './SourceText.js';

const initialState = {
    sources : []
}

class SideNav extends Component{

    constructor(){
		super();
        this.state = initialState;
		
	}

    componentDidMount(){
        fetch('https://newsapi.org/v2/sources?apiKey=449c1304603642b780100dfd65e5db1c')
        .then((res)=>res.json())
        .then(data=>{
            const newSources = [];
            data.sources.map((d)=>{
                newSources.push(<SourceText key={d.id} name={d.name} link ={"/source/"+d.id} />);
            })
            this.setState({sources:newSources})
        })
    }

    render(){
        return(
            <Card
            style={{ width: '18rem',
            
            position: 'absolute',
            marginLeft : '5%',top:'15%',
            height : "73vh",
            'box-shadow': '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
            'borderRadius':'25px'}}>
                <Card.Body>
				    <Card.Title style={{'text-align':'left',position: "sticky"}}>Source</Card.Title>
				    <Card 
                    style={{ 
                    overflowY: "auto",
                    maxHeight : "65vh",
                    borderStyle:"none"
                    }}>
				  <Card.Body>
				    
				    <Card.Text >
				     {this.state.sources}
				    </Card.Text>
            
				  </Card.Body>
                  </Card>
            
				  </Card.Body>
                
			
            </Card>
            
        )
    }

}

export default SideNav;