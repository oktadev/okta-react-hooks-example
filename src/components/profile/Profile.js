import React, { Component } from 'react';
import { withAuth } from '@okta/okta-react';

async function checkAuthentication() {
  const authenticated = await this.props.auth.isAuthenticated();
  if (authenticated !== this.state.authenticated) {
    if (authenticated && !this.state.userinfo) {
      const userinfo = await this.props.auth.getUser();
      this.setState({ authenticated, userinfo });
    } else {
      this.setState({ authenticated });
    }
  }
}

export default withAuth(class Profile extends Component {

  constructor(props){
    super(props);
    this.state = {userinfo: null, ready: false};
    this.checkAuthentication = checkAuthentication.bind(this);
  }

  async componentDidMount() {
    await this.checkAuthentication();
    this.applyClaims();
  }

  async componentDidUpdate() {
    await this.checkAuthentication();
    this.applyClaims();
  }

  async applyClaims() {
    if (this.state.userinfo && !this.state.claims) {
      const claims = Object.entries(this.state.userinfo);
      this.setState({ claims, ready: true });
    }
  }

  render(){
    return(
      <div>
        {!this.state.ready && <p>Fetching user profile..</p>}
        {this.state.ready &&
        <div>
          <h1>User Profile</h1>
          <ul>
            {this.state.claims.map((claim) => {
              return <li><strong>{claim[0]}:</strong> {claim[1]}</li>;
            })}
          </ul>
        </div>
        }
      </div>
    );
  }
});
