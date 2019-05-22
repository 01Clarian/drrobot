import React from 'react';
import Robot from '../Functions/Robot'

const Display2 = ({ textSize, buttonColor, textColor, goToFeelings, directoryText, onHelperClick })=>{

	return (
		<div id="topmost" className="page-header section2">
		<div>
    <div className="content-center">
		<div className="moving-clouds"></div>
                <div className="container newFont">
                    <div className="title-brand">
										<h2 className="h1-responsive font-weight-bold text-center my-4" style={{  visibility: 'hidden'}}>a</h2>
						<h1 style={{opacity:"0.6"}}>Dr. <span className="highlight">Ro</span>bot</h1>
		          	<Robot
		          		buttonColor={buttonColor}
		          		textColor ={textColor}
									directoryText = {directoryText}
									goToFeelings={goToFeelings}
		          		onHelperClick = {onHelperClick}
		          		textSize = {textSize}
		          	 />
		        </div>
		</div>
		</div>
		</div>
		</div>
	);

}



export default Display2;