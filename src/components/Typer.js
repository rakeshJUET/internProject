import React,{Component} from 'react'

import '../assets/csss/Typer.css'

class Typer extends Component {

  state = {
    text: '',
    isDeleting: false,
    loopNum: 0,
    typingSpeed: 200
  }

  componentDidMount() {
    this.handleType();
  }

  handleType = () => {
    const { dataText } = this.props;
    const { isDeleting, loopNum, text, typingSpeed } = this.state;
    const i = loopNum % dataText.length;
    const fullText = dataText[i];

    this.setState({
      text: isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1),
      typingSpeed: isDeleting ? 30 : 150
    });

    if (!isDeleting && text === fullText) {     
      setTimeout(() => this.setState({ isDeleting: true }), 200);   
    } else if (isDeleting && text === '') {
      this.setState({
        isDeleting: false,
        loopNum: loopNum + 1
      });      
    }

    setTimeout(this.handleType, typingSpeed);
  };

  render() {    
    return (
      <u style={{"color": "rgba(0,0,0,0.7)"}}><h1 className="head1" style={{"color": "rgba(0,0,0,0.7)"}} >
        <span>:{ this.state.text }</span>
        <span id="cursor"></span>
      </h1></u>
    );
  }
}

export default Typer