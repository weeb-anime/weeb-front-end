import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';

class Profile extends Component {
  render() {
    return (
      <>
        {this.props.auth0.isAuthenticated && (
          <>
            <h1> Hi from the other side</h1>
            <p>Username: {this.props.auth0.user.name}</p>
          </>
        )}
      </>
    );
  }
}
export default withAuth0(Profile);
