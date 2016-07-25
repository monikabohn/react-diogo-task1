require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import ContactListBox from 'components/ContactListBox';
import ContactDetailsBox from 'components/ContactDetailsBox';

class AppComponent extends React.Component {
  constructor(props) {
    super();
    this.state = {person: {
      'name': {'title': 'mrs', 'first': 'becky', 'last': 'brown'},
      'email': 'becky.brown@example.com',
      'picture': {
        'thumbnail': 'https://randomuser.me/api/portraits/thumb/women/11.jpg'
      },
      'cell':'06-94-68-97-92',
      'location': {
        'city': 'london'
      }
    }};
  }

  displayDetails(item) {
    this.setState({ person: item});
  }
  
  render() {
    return (
      <div className="index">
        <div className="notice">Contact list app</div>
        <ContactListBox updateDetails={this.displayDetails.bind(this)} />
        <ContactDetailsBox showDetails={this.state.person} />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
