import React, { Component } from "react";
import { Link } from "react-router-dom";
import { 
  Button, 
  Form , 
  Grid, 
  Header, 
  Image, 
  Message, 
  Segment, 
  Loader
 } from 'semantic-ui-react'

import  { AuthService } from "../services/";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    AuthService.login(this.state.username, this.state.password).then(
      () => {
        this.props.history.push("/profile");
        window.location.reload();
      },
      error => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        this.setState({
          loading: false,
          message: resMessage
        });
      }
    );
  }

  render() {
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            <Image src='https://react.semantic-ui.com/logo.png' /> Log-in to your account
          </Header>
              <Form 
                onSubmit={event => this.handleLogin(event)}
                >
                <Segment>              
                  <Form.Input 
                    type="text"
                    name="username"
                    size="huge"
                    fluid
                    icon='user'
                    iconPosition='left'
                    placeholder='johndoe'
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    validations={[required]}
                    />            
                  <Form.Input
                    type='password'
                    name="password"
                    size="huge"
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password' 
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required]}
                  />
                  <Button 
                    type="submit"
                    color='teal'
                    fluid
                    size='huge'
                    disabled={this.state.loading}
                    >
                    {this.state.loading && (
                      <Loader active inline='centered' />
                    )}
                    Login
                  </Button>
                </Segment>
          </Form>
        
          {this.state.message && (
            <Message negative>  
              <p> {this.state.message}</p>
            </Message>
          )}

          <Message>
            New to us? &nbsp;
            <Link to={"/register"}>Sign Up</Link>
          </Message>

        </Grid.Column>
      </Grid>
    );
  }
}

export default Login