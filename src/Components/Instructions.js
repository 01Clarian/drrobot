import React from 'react'

const Instructions = ()=>{

	return (
		<div>
			            <div className="content-center flexIt">

                        <div className="site-section md-form mb-0 text-white font-weight-light font-weight-bold" id="section-services" >
        <div className="row justify-content-center mb-5" data-aos="fade-up">
          <div className="col-md-7 text-center">
            <h2 className="mb-0 text-primary">Instructions</h2>
          </div>
        </div>
          <div  data-aos="fade-up" data-aos-delay="100">
            <div className="unit-4 d-flex row justify-content-center mb-5">
              <div>
                <h4>IBM Cloud And UI</h4>
                <h3>Doctor Robot is a UI / API Exercise which implements IBM WATSON Speech Recoginition. </h3>
                <p></p>
                <h3>Please click on Voice Activation and make sure your computer microphone is working and you can ask to <span style={{color:"red"}}> speak to Dr. Robot </span> or let the PA how you are feeling so that she may direct you further. Ex: "I am feeling good" or "Feeling nervous" Etc. You may scroll down and hit the "Reset" button to try again. </h3>
                <p><a href="https://cloud.ibm.com/docs/resources?topic=resources-services_region" rel="noopener noreferrer" target="_blank">Learn More</a></p>
                <p data-aos="fade-up" data-aos-delay="200"><a href="/mainDirectory" className="btn btn-info py-3 px-5 text-white">Reset</a></p>
              </div>
            </div>
          </div>
        </div>
      
    </div>

		</div>
	);

}



export default Instructions;