import React from 'react';
import $ from 'jquery';

class ContactList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: {
      'results': [{
        'gender': 'female',
        'name': {'title': 'mrs', 'first': 'becky', 'last': 'brown'},
        'location': {
          'street': '6990 church street',
          'city': 'ripon',
          'state': 'shropshire',
          'postcode': 'GV43 0SQ'
        },
        'email': 'christina.olson@example.com',
        'login': {
          'username': 'ticklishladybug495',
          'password': 'sonia',
          'salt': 'OJYqoHua',
          'md5': '56533719f74e4359e9cb5cfac297a6f2',
          'sha1': '02a8c52be277f5baafad22b3fc140ae76df4a444',
          'sha256': '5ddaebe319873690cd3dce7a4594e1d18d3363be9c8182abea3365ba81bdc68b'
        },
        'registered': 1242809741,
        'dob': 259376689,
        'phone': '0118276 802 9677',
        'cell': '0789-775-028',
        'id': {'name': 'NINO', 'value': 'ZR 32 41 57 T'},
        'picture': {
          'large': 'https://randomuser.me/api/portraits/women/11.jpg',
          'medium': 'https://randomuser.me/api/portraits/med/women/11.jpg',
          'thumbnail': 'https://randomuser.me/api/portraits/thumb/women/11.jpg'
        },
        'nat': 'GB'
      }],
      'info': {'seed': '2c25ff7d620f3ab3', 'results': 1, 'page': 1, 'version': '1.0'}
    }
    };
  }

    loadListFromServer() {
      $.ajax({
        url: this.props.url,
        dataType: 'json',
        success: (data) => {
          this.setState({data: data});
        }
      });
    }

    componentDidMount() {
       this.loadListFromServer();
    }

    handleClick(person) {
      this.props.updateDetails(person);
    }

  render () {

    var displayedItems = this.state.data.results.filter(function(item){
        var match = item.name.first.indexOf(this.props.filterText);
        return (match !== -1);
    }.bind(this));

    var personList = displayedItems.map(function(person) {
      return (
            <li>
              <a href="#" onClick={this.handleClick.bind(this, person)}>{person.name.first} {person.name.last}</a>
            </li>
      );
    }.bind(this));

    return (
      <div className="list">
        <div>
          <ul>
            {personList}
          </ul>
        </div>
      </div>
    )
  }
}

ContactList.displayName = 'ContactList';

export default ContactList;
