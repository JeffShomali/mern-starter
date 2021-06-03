import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom";
import { Container, Header,  Divider } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import AuthService from "./services/AuthService";
import {
  Login,
  Register,
  Home,
  Profile,
  AddBook,
  Book,
  BookList 
} from "./pages";
import { Navigation } from './components'

class App extends Component {
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
      <Container>
          <Divider hidden />
          <Navigation activeItem />
        
        <Header as='h2'>
          Book Management App 
        </Header>

        {/* Routes */}
        <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/books" component={BookList} />
            <Route exact path="/books/:id" component={Book} />
            <Route exact path="/add" component={AddBook} />
        </Switch>

      </Container>
    )
  }
}

export default App;