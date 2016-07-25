import React from 'react';
require('styles/ContactDetailsBox.css');

class ContactDetailsBox extends React.Component {

  render() {
    const { email, name, picture, location, cell } = this.props.showDetails;

    return(
      <div className="contactDetails">
        <img src={picture && picture.thumbnail} alt="Photo" />
        <div className="contactInfo">
          <span className="name">{name && name.first} {name && name.last}</span>
          <span>{email}</span>
          <span>{location && location.city }</span>
          <span>tel. {cell}</span>
        </div>
      </div>
    );
  }
}

ContactDetailsBox.displayName = 'ContactDetailsBox';

export default ContactDetailsBox;
