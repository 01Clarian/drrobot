import React from 'react';
import TextDisplay from '../Functions/TextDisplay';
import TextCapture from '../Functions/TextCapture.js';
import Instructions from './Instructions.js'

const Header = ({ textButtonClick, voiceButtonClick, helpButtonClick, submitClick, submitFieldChange, mode, BGColor, buttonColor, textColor, textSize, fieldString, keyWord, adjective, modifyer})=>{

  const modeSelect= {
    readOut: ()=>{
        if (mode === "voice"){
            return (
                <TextDisplay
                  textColor={textColor}
                  textSize={textSize}
                  fieldString={fieldString}
                  keyWord={keyWord}
                  adjective={adjective}
                  modifyer={modifyer}
                  mode={mode}
                />
            )
        } else if (mode === 'text') {
            return(
              <div>
                <TextDisplay
                  textColor={textColor}
                  textSize={textSize}
                  fieldString={fieldString}
                  keyWord={keyWord}
                  adjective={adjective}
                  modifyer={modifyer}
                  mode={mode}
                />
              </div>
            )
          } else if (mode === 'help') {
            return(
              <div>
                <Instructions
                  textColor={textColor}
                  textSize={textSize}
                  fieldString={fieldString}
                  keyWord={keyWord}
                  adjective={adjective}
                  modifyer={modifyer}
                  mode={mode}
                />
              </div>
            )
        };
    },
    modeButtons : ()=>{
        if (mode===""){
            return (
              <div className="container text-white" style={{width:"90%", fontColor:"white"}}>                
              <button className="btn btn-success text-white btn-lg start2 btn-round"  onClick={voiceButtonClick}>Voice Activate</button>
                <button className="btn btn-info btn-lg start2 btn-round"  onClick={textButtonClick}> Text Activate </button>                
                <button className="btn btn-warning btn-lg text-white start2 btn-round" onClick={helpButtonClick} >  Help </button>  
              </div>
            )
        } else if (mode==="text"){
            return(
              <div>
                <TextCapture 
                  style={{ marginBottom:'50px', zIndex:'400'}}
                  submitClick={submitClick}
                  submitFieldChange={submitFieldChange} 
                  buttonColor={buttonColor}
                  textColor={textColor}
                />
              </div>
            )
            
        } 
    },
    title : ()=>{

        return(
            mode
        )
    }        
  }
    return (
        <div id="topmost" className="page-header section-dark" style={{background:`${BGColor}`}}>
            
            <div className="moving-clouds" style={{backgroundImage:`url(${'https://cdn.rawgit.com/creativetimofficial/paper-kit/bootstrap4-development/assets/img/clouds.png'})` }}>
            </div> 
            <div className="content-center">
                <div className="container">
                <div className="modeButt">
                {modeSelect.readOut()}
                </div>
                        <div className="fog-low right" style={{transitionDuration: '1s'}}>
                            <img src="https://cdn.rawgit.com/creativetimofficial/paper-kit/bootstrap4-development/assets/img/fog-low.png" alt="" />
                        </div>
                    </div>
                    {modeSelect.modeButtons()}
                </div>
            </div>

              );

}



export default Header;        


// style="background-image: url('https://cdn.rawgit.com/creativetimofficial/paper-kit/bootstrap4-development/assets/img/antoine-barres.jpg')"

// style="background-image: url('https://cdn.rawgit.com/creativetimofficial/paper-kit/bootstrap4-development/assets/img/clouds.png'); "
