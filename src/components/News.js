import React,{Component} from 'react'
import {withRouter} from 'react-router';
import NewsCard from './NewsCard'
import {Container,Row} from 'react-bootstrap'


const initialState = {
    news : []
}

class News extends Component{
    constructor(props){
        super(props);
        this.state = initialState;
    }

    componentDidMount(){
        
        fetch(`https://newsapi.org/v2/top-headlines?sources=${this.props.match.params.sourceId}&apiKey=449c1304603642b780100dfd65e5db1c&pageSize=2`)
        .then((data)=>data.json())
        .then((data=>{
            const newNews = [];
            data.articles.map((d)=>{
                newNews.push(<NewsCard articles={d}/>)
            })
            this.setState({news:newNews});
        }))
    }

    render(){
        return(
            <div style={{width:"72vw",marginLeft:"27%",height:"62vh",marginTop:"8%"}}>
                <h3>{this.props.match.params.sourceId}</h3>
                <div style={{display: "inline-flex",
                    padding: "3%",
                    verticalAlign: "top",height:"66vh"
            }}>
                
               
                    {this.state.news}
				   
                
            </div>
            </div>
            
        )
    }
}

export default withRouter(News);