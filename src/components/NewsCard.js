import React,{Component} from 'react'
import {withRouter} from 'react-router';
import {Card,Button} from 'react-bootstrap'
import {Link} from "react-router-dom"

class NewsCard extends Component {
    constructor(props){
        super(props)
        console.log(this.props)
    }

    render(){
        return(
            <Card style={{ width: '40%',marginRight:'10%','borderRadius':'25px'}}>
                <Card.Img variant="top" src={this.props.articles.urlToImage} 
                    style={{ 'borderRadius':'25px'}}
                />
                <Card.Body >
                    <Card.Title>{this.props.articles.title}</Card.Title>
                    <Card.Text style={{overflowY:"hidden",maxHeight:"12vh"}}>
                        {this.props.articles.description}
                    </Card.Text>
                    <Link to={this.props.articles.url}>Read More</Link>
                </Card.Body>
            </Card>
        )
    }
}

export default NewsCard;