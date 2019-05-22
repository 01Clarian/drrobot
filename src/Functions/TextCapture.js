import React from 'react';
import './TextCapture.css'

const TextCapture = ({ submitClick, submitFieldChange })=>{

	return (
		<div>
			            <div className="content-center flexIt">

			<input type="text" className="text-center" style={{marginLeft:"150px"}} placeholder="Type Something" id="submitField" onChange={submitFieldChange} />
			<p></p>
			<button id="submitButton"  className="btn btn-success btn-lg  btn-round" style={{width:'30%', marginLeft:"165px"}} onClick={submitClick}> Submit! </button>
		</div>
		</div>
	);

}

export default TextCapture;
