import React, {Component} from 'react'
require('dotenv').config()

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
          name: '',
          subject: '',
          email: '',
          message: '',
          mailSent: false,
          error: null,
        }
    }
     
    handleFormSubmit( event ) {
            event.preventDefault();
            console.log(this.state);
            alert("sorry, our server is temporarily unavailable. Please try again later.")
          
              this.setState({
                formSubmitted: true
              })
            }
          

            sendFeedback (templateId, senderEmail, receiverEmail, feedback) {
                window.emailjs.send(
                  'sendgrid',
                  templateId,
                  {
                    senderEmail,
                    receiverEmail,
                    feedback
                  })
                  .then(res => {
                    this.setState({ formEmailSent: true })
                  })
                  // Handle errors here however you like, or use a React error boundary
                  .catch(err => console.error('Failed to send feedback. Error: ', err))
              }


    render () {
        return (

    <div>
        		<div id="topmost" className="page-header section">
    <div className="content-center"></div>
   <section className="mb-4">
       <h1 className="h1-responsive font-weight-bold text-center my-4" style={{  visibility: 'hidden'}}>a</h1>
<h2 className="h1-responsive font-weight-bold text-center my-4 text-white text-uppercase" style={{margin:"40px", opacity:"0.6"}}>Contact <span className="blue1">C</span><span className="blue2">L</span><span className="blue3">A</span><span className="blue4">R</span>ian</h2>
<p className="text-center w-responsive mx-auto mb-5 text-white font-weight-light text-uppercase font-weight-bold">Do you have any questions? Please do not hesitate to contact me directly.</p>
<div className="row">
    <div className="col-md-9 mb-md-0 mb-5">
        <form id="contact-form" name="contact-form" action="mail.php" method="POST">
            <div className="row">
                <div className="col-md-6">
                    <div className="md-form mb-0">
                        <input type="text" id="name" className="form-control" value={this.state.name}
    onChange={e => this.setState({ name: e.target.value })}>
                        </input>
                        <label htmlFor="name" className="text-white font-weight-light text-uppercase font-weight-bold">Your name</label>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="md-form mb-0 text-white font-weight-light text-uppercase font-weight-bold">
                        <input type="text" id="email" name="email" className="form-control" value={this.state.email}
    onChange={e => this.setState({ email: e.target.value })}>
                       </input>
                        <label htmlFor="email" className="">Your email</label>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="md-form mb-0">
                        <input type="text" id="subject" name="subject" className="form-control"
                        value={this.state.subject}
                        onChange={e => this.setState({ subject: e.target.value })}>
                        </input>
                        <label htmlFor="subject" className="text-white font-weight-light text-uppercase font-weight-bold">Subject</label>
                    </div>
                </div>
            </div>
            <div className="row">

                <div className="col-md-12">

                    <div className="md-form text-white font-weight-light text-uppercase font-weight-bold">
                        <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"
                        value={this.state.message}
                        onChange={e => this.setState({ message: e.target.value })}></textarea>
                        <label htmlFor="message" className="">Your message</label>
                    </div>

                </div>
            </div>
        </form>

        <div className="text-center text-md-left text-white font-weight-light text-uppercase font-weight-bold">
            <button className="btn btn-info" onClick={e => this.handleFormSubmit(e)} value="Submit">Send</button>
        </div>
        <div className="status"></div>
    </div>
    <div className="col-md-3 text-center text-white font-weight-light text-uppercase font-weight-bold">
    </div>

</div>
<div className="G.s5R6KJGSQCmth01Pe_adzw.oTN51IXcPWdwQdnEMVEw7g70VTvO3_gzkvQ03fKrkQ4"></div>
</section>
  </div>
  </div>
        )
        }    
    }
        

export default Contact 