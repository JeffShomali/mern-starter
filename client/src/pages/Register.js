import React, { Component } from 'react'
import { Button, Form as UIForm, Grid, Header, Image, Segment, Loader, Divider } from 'semantic-ui-react'
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import { AuthService } from "../services/";

// Helper methods
const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const email = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      email: "",
      password: "",
      successful: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.register(
        this.state.username,
        this.state.email,
        this.state.password
      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage
          });
        }
      );
    }
  }

  render() {
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            <Image src='https://react.semantic-ui.com/logo.png' /> Register
          </Header>
              <Form 
                onSubmit={event => this.handleRegister(event)} 
                ref={c => { this.form = c}}
                >
                <Segment>              
                  <UIForm.Input 
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
                  <UIForm.Input 
                   type="text" 
                    type="text"
                   type="text" 
                    type="text"
                   type="text" 
                   name="email"
                   size="huge"
                   fluid
                   icon='mail'
                   iconPosition='left'
                   placeholder='johndoe@email.com'
                   value={this.state.email}
                   onChange={this.onChangeEmail}
                   validations={[required, email]}
                  />           
                  <UIForm.Input
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
                  <Divider hidden/>
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
                    Register
                  </Button>
                  <Divider hidden/>
                  
                  {this.state.message && (
                    <div className={
                       this.state.successful
                        ? "ui success message" 
                        : "ui negative message"
                    }>
                      <p>{this.state.message}</p>
                    </div>
                  )}
                  
                </Segment>
                
                <CheckButton
                style={{ display: "none" }}
                ref={c => { this.checkBtn = c;}}
            />
          </Form>      

        </Grid.Column>
      </Grid>
    )
  }
}

export default Register;