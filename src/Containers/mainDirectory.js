import React, { Component } from 'react'
import './mainDirectory.css'
import '../Media/bg1.png'
import typewrite from '../Functions/typewrite';
import pause from '../Functions/pause';
import directoryText from '../Functions/directoryText'
import Display from '../Components/Display'
import Display2 from '../Components/Display2';
import processor from '../Functions/processor';
import activateProcessor from '../Functions/activateProcessor';
import recognizeMic from 'watson-speech/speech-to-text/recognize-microphone'

class mainDirectory extends Component {
    constructor (props){
      super(props);
      this.state ={
        fieldString:'',
        submittedString:'NOTHING',
        keyWord:'waiting',
        modifyer:'waiting',
        adjective: 'waiting',
        adjType: 'waiting',
        isComplex: false,
        textColor:'white',
        textSize:'normal',
        mode:'',
        modeSwitch:false,
        robotStatus: 'start',
        directoryText: 'Hello!',
      }
    }

  activate=()=>{
    const {keyWord, fieldString, adjective, adjType, isComplex, modifyer} = this.state
    let value = fieldString;
    let words = processor(fieldString, keyWord)
    let action = activateProcessor(keyWord, adjective, adjType, isComplex, modifyer);
    this.setState(words);
    this.setState(action);
    this.setState({ submittedString:value })
  }

  onSubmitFieldChange=(data)=>{
    let words = processor(this.state.fieldString, this.state.keyWord)
    this.setState(words)
    this.setState({fieldString:data.target.value})
    
  }

  clearSubmitField = () =>{
    document.getElementById("submitField").value='';
  }

  onListenClick = () =>{
  fetch('http://localhost:3014/api/speech-to-text/token')
    .then((response) => {
        return response.text();
    }).then( (token) => {
      var stream = recognizeMic({
          access_token: token,
          objectMode: false, // send objects instead of text
          extractResults: true, // convert {results: [{alternatives:[...]}], result_index: 0} to {alternatives: [...], index: 0}
          format: false // optional - performs basic formatting on the results such as capitals an periods
      });
      stream.on('data', (data) => {
        this.setState({fieldString:data.alternatives[0].transcript});
        this.activate();
        
      });
      stream.on('error', (err) => {
        console.log(err);
      });
      document.querySelector('#stop').onclick = stream.stop.bind(stream);
    }).catch((error) =>{
        console.log(error);
    });
  }

  onVoiceButtonClick = () =>{
    this.robotStatusUpdate('voice');
    this.onListenClick();
    this.helpCycle('voice');
  }

  onTextButtonClick = ()=>{
    this.robotStatusUpdate('text');
    this.helpCycle('text');
  }

  onHelpButtonClick = ()=>{
    this.robotStatusUpdate('help');
    this.helpCycle('help');
  }
 
  submitClick = ()=>{
    this.activate();
    this.clearSubmitField();
  }

////// These functions update the 'AI' Helper window.

  helpCycle = async (mode) =>{
    let i = 0;
    let textArr = directoryText(mode)
    while (i<textArr.length ){

      this.typer(textArr[i]);
      await pause(9000)
      i++; 
    }
  }


  robotStatusUpdate = (mode)=>{
    this.setState({mode:mode, robotStatus:mode, modeSwitch:true});
  }

  robotTextUpdate = (newString)=>{
    this.setState({directoryText:newString})
  }

  typer = (string) =>{
    typewrite(string, this.robotTextUpdate);
  }

  componentDidMount(){
    this.helpCycle('start')

  }

    render () {
      const { directoryText, mode, textSize, textColor, fieldString, keyWord, adjective, modifyer} = this.state;

      return (        

        <div>
        <div className="centerMe">

        <Display2   className="position2"     textColor={textColor}
          directoryText={directoryText}
          onHelperClick={this.onHelperClick}
          textSize={textSize}
        />

        <Display 
          mode = {mode}
          textSize = {textSize}
          textColor={textColor}
          fieldString={fieldString}
          keyWord={keyWord}
          adjective={adjective}
          modifyer={modifyer}
          activate={this.activate}
          submitFieldChange={this.onSubmitFieldChange}
          submitClick={this.submitClick}
          voiceButtonClick={this.onVoiceButtonClick}
          textButtonClick={this.onTextButtonClick}
          helpButtonClick={this.onHelpButtonClick}
        />
        </div>
        </div>
      )
    }
    }

export default mainDirectory

