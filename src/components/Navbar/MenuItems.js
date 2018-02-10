import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import {
  Button,
  Menu,
  Container,
} from 'semantic-ui-react';

import * as routes from '../../constants/routes';

class MenuItems extends Component {
  state = {}
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    return (
      <Container>
        <Menu.Item as='a'>
          <NavLink
            exact
            to={routes.LANDING}
            >Housesplit
          </NavLink>
        </Menu.Item>
        <Menu.Item name='howItWorks' active={activeItem === 'howItWorks'} onClick={this.handleItemClick} as='a'>How it works</Menu.Item>
        <Menu.Item name='faq' active={activeItem === 'faq'} onClick={this.handleItemClick} as='a'>FAQ</Menu.Item>
        <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick} as='a'>About</Menu.Item>
        <Menu.Item position='right'>
          <NavLink
            exact
            to={routes.SIGN_IN}>
            <Button as='a' inverted={!this.props.fixed}>Log in</Button>
          </NavLink>
          <NavLink
            exact
            to={routes.SIGN_UP}>
            <Button as='a' inverted={!this.props.fixed} primary={this.props.fixed} style={{ marginLeft: '0.5em' }}>Sign Up</Button>
          </NavLink>
        </Menu.Item>
      </Container>
    );
  }
}

export default MenuItems;
