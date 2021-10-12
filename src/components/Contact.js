import React from 'react';
import Googlemap from './Googlemap';
import './Contact.css';

class Contact extends React.Component {
  constructor(props){
    super(props);
    this.state={
      name:"",
      email:"",
      message:"",
      gender:""
    }
  }

  handleFormSubmit( event ) {
    event.preventDefault();
    console.log(this.state);
  }

  render(){
    return(
      <div className = "App-Contact pattern">

        <div className="container-contact">
          <p className="pageTitle">CONTACT</p>
          <p className="pageHeaders">Direct contact</p>
          <p>tel: 6972827033</p><p>email: johnwest33@gmail.com</p>
          <p className="pageHeaders">Opening hours</p>
          <p>Monday - Friday<br></br> from 9:00 to 17:00</p>
          <p>Saturday - Sunday<br></br> from 9:00 to 13:00</p>
          <p className="pageHeaders">Get in touch</p>

          <div>
          <form action="#">
            <div className="form-group">
              <input type="text" id="name" placeholder="Name" value={this.state.name} onChange={e => this.setState({name:e.target.value})}
              />
            </div>
            <div className="form-group">
              <input type="email" className="miaklasi" id="mail" placeholder="Email" value={this.state.email} onChange={e => this.setState({email:e.target.value})}
              />
            </div>
            <div className="form-group">
              <textarea id="message" placeholder="Message" rows="9" value={this.state.message} onChange={e => this.setState({message:e.target.value})}></textarea>
            </div>
            
            <div className="radioOptions">
              <span>Select your gender</span><br></br>
              <label htmlFor="male">Male</label>
              <input type="radio" id="male" name="genderSelection" value="male" onChange={e => this.setState({gender:"Male"})}/>
              <label htmlFor="female">Female</label>
              <input type="radio" id="female" name="genderSelection" value="female" onChange={e => this.setState({gender:"Female"})}/>
              <label htmlFor="other">Other</label>
              <input type="radio" id="other" name="genderSelection" value="other" onChange={e => this.setState({gender:"Other"})}/>
            </div>
            <button type="submit" className="form-control-button" value="Submit" onClick={e => this.handleFormSubmit(e)} >Submit</button>
          </form>
        </div>

          <p className="pageHeaders">Address</p>
          <p>83-109 Seymour Place<br></br>London</p>
          <Googlemap/>

        </div>
      </div>
    );
  }
}


export default Contact;