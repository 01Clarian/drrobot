import React from 'react';
import './Helper.css';

const Display2 = ({ directoryText, onHelperClick, buttonColor})=>{


	return (
		
				<div className="helper-box" >
	         	<div className="helper" style={{ backgroundColor:buttonColor}}  onClick={onHelperClick}>
				 <div className="position">
        <textarea className="helper-text typewriter text-white font-weight-light font-weight-bold" rows="7" cols="25" style={{fontSize:"16px"}} placeholder={directoryText}></textarea>

        </div>
	         	</div>
	      	</div>

	);

}



export default Display2;		