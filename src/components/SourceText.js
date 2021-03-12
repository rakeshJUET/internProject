import React,{Component} from 'react'
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import {Card,Button} from 'react-bootstrap'

class SourceText extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
             <Nav.Link href={this.props.link}>{this.props.name}</Nav.Link>
        )
    }


}


export default SourceText;