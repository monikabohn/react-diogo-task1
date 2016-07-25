import React from 'react';
import ContactSearchForm from 'components/ContactSearchForm';
import ContactList from 'components/ContactList';

require('styles/ContactListBox.css');

class ContactListBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nameFilter: ''};
  }

  handleFilterUpdate(newFilter) {
    this.setState({nameFilter: newFilter});
  }

  render() {
    return(
       <div className="contactList">
          Search:
          <ContactSearchForm updateFilter={this.handleFilterUpdate.bind(this)} />
          <ContactList url='http://api.randomuser.me/?results=50' filterText={this.state.nameFilter} updateDetails={this.props.updateDetails} />
       </div>
    );
  }
}

ContactListBox.displayName = 'ContactListBox';

export default ContactListBox;
