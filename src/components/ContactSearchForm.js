import React from 'react';

class ContactSearchForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: ''};
  }

  handleFilterChange() {
    var value = this.refs.filterInput.value;
    this.props.updateFilter(value);
  }

  render() {
    return (
          <input type="text" onChange={this.handleFilterChange.bind(this)} ref="filterInput" />
    );
  }
}

ContactSearchForm.displayName = 'ContactSearchForm';

export default ContactSearchForm;
