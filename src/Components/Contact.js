import React from 'react';
import './Contact.css';

class Contact extends React.Component {
  constructor(){
    super();
    this.state = {
      online: false,
    }
  }

  connection = () => {
    console.log("clic");
    const newStatus = !this.state.online;
    this.setState({online: newStatus});
  }

  render() {
    return (
      <div className="Contact">
        <img className="avatar" src={this.props.avatar} alt={this.props.name}></img>
        <h4 className="name">{this.props.name}</h4>
        <div className="status">
          <div>
              <div className={this.state.online ? "status-online" : "status-offline"}></div>
              <div onClick={this.connection} className="status-text">{this.state.online ? "Online" : "Offline"}</div>   
          </div>
        </div> 
      </div>
    )
  }
}

export default Contact;