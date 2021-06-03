
import React, { Component } from 'react'
import { Link} from "react-router-dom";
import { Menu } from 'semantic-ui-react'

import AuthService from "../services/AuthService";

class Navigation extends Component {
  state = {
    activeItem: 'home',
    showModeratorBoard: false,
    showAdminBoard: false,
    currentUser: undefined,
   }

   componentDidMount() {
     const user = AuthService.getCurrentUser();
 
     if (user) this.setState({  currentUser: user, });
     
   }
 
   logOut() {
     AuthService.logout();
   }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name }) 
  
  render() {
    const { activeItem, currentUser } = this.state
    return (
      <Menu secondary size='massive'>
            <Link to={"/home"}>
              <Menu.Item
                  name='home'
                  active={activeItem === 'home'}
                  onClick={this.handleItemClick}
                />
            </Link> 
          {currentUser && (
            <React.Fragment>         
            <Link to={"/profile"}>
              <Menu.Item
                name='Profile'
                active={activeItem === 'Profile'}
                onClick={this.handleItemClick}
              />
            </Link>
            <Link to={"/user"}>
              <Menu.Item
                name='user'
                active={activeItem === 'user'}
                onClick={this.handleItemClick}
              />
            </Link>

            
              <Link to={"/books"}>
              <Menu.Item
                name='Book Lists'
                active={activeItem === 'Book Lists'}
                onClick={this.handleItemClick}
              />
            </Link>

            <Link to={"/add"}>
              <Menu.Item
                name='Add a New Book'
                active={activeItem === 'Add a New Book'}
                onClick={this.handleItemClick}
              />
            </Link>
            </React.Fragment>
            )}

            <Menu.Menu position='right'>
            {!currentUser && (   
              <>
                <Link to={"/login"}>
                  <Menu.Item
                    name='login'
                    active={activeItem === 'login'}
                    onClick={this.handleItemClick}
                  />
                </Link>
                <Link to={"/register"}>
                  <Menu.Item
                    name='register'
                    active={activeItem === 'register'}
                    onClick={this.handleItemClick}
                  />
                </Link>
              </>
              )}
              
              {currentUser && (
                <Menu.Item
                  name='logout'
                  active={activeItem === 'logout'}
                  onClick={this.logOut}
                />
              )}
              
            </Menu.Menu>
          </Menu>
    )
  }
}

export default Navigation;