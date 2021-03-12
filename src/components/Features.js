import React,{Component} from 'react'
import MyCard from './CardCont.js'
import SideNav from './SideNav'
import {Container,Row,Col,Image,Button} from 'react-bootstrap'
import '../assets/csss/Features.css'
import {RecordVoiceOver,flight,cloudUpload,closedCaption} from '@material-ui/icons';

const cardItem =[
	
	{
		title:'Easy one click conversion',
		subTitle:"Listnr converts your Blog into a Podcast with the hep of Google WaveNet TTS. You can download your audio file and distribute anywhere you'd like.",
		icon:<RecordVoiceOver style={{ fontSize: '4.0em' }}/>,
	},
	{
		title:"28+ Languages supported!",
		subTitle:"We support a variety of the worlds most spoken languages, anywhere from English to Mandarin.",
		icon:<RecordVoiceOver style={{ fontSize: '4.0em' }}/>,
	},
	{
		title:"Easily Embedabble",
		subTitle:"Embed your podcast anywhere anywhere you want. Free customizations and integrations with the Listnr Pro Plan 😃",
		icon:<RecordVoiceOver style={{ fontSize: '4.0em' }}/>,
	},

]


let initialState={
	cardList : []
}

class Features extends Component{

	constructor(){
		super();
		this.state = initialState
	}

	componentDidMount(){
		let newList = []
		for(let i=0;i<3;i++){
			newList.push(<MyCard title={cardItem[i].title} subTitle={cardItem[i].subTitle} icon={cardItem[i].icon}/>)
		}
		this.setState({cardList:newList})
	}

	render(){
		return(

				// <Container fluid="md" className="conta">
				//   <Row>
				//     <h1 className="head">Everything you need to create Voice Over audio 👆</h1>
				// 	<p className="pr1">No more hunting for voice over actors. No more waiting for days. Just paste your text, select a voice and create a voice over audio instantly.</p>
				// 	<div className="cardLists">
				// 		{this.state.cardList}
				// 	</div>
				//   </Row>
				// </Container>
				<SideNav/>
			)
	}

}

export default Features