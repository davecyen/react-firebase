import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
} from 'semantic-ui-react';

import Top from './Top';

class MobileContainer extends Component {
  state = {}

  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state
    const { activeItem } = this.state

    return (
      <Responsive {...Responsive.onlyMobile}>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation='uncover' inverted vertical visible={sidebarOpened}>
            <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} as='a' header>Housesplit</Menu.Item>
            <Menu.Item name='howItWorks' active={activeItem === 'howItWorks'} onClick={this.handleItemClick} as='a'>How it works</Menu.Item>
            <Menu.Item name='faq' active={activeItem === 'faq'} onClick={this.handleItemClick} as='a'>FAQ</Menu.Item>
            <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick} as='a'>About</Menu.Item>
            <Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick} as='a'>Log in</Menu.Item>
            <Menu.Item name='signup' active={activeItem === 'signup'} onClick={this.handleItemClick} as='a'primary>Sign Up</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened} onClick={this.handleToggle} style={{ minHeight: '100vh' }}>
            <Segment inverted textAlign='center' style={{ minHeight: 350, padding: '1em 0em' }} vertical>
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <Menu.Item position='right'>
                    <Button as='a' inverted>Log in</Button>
                    <Button as='a' inverted style={{ marginLeft: '0.5em' }}>Sign Up</Button>
                  </Menu.Item>
                </Menu>
              </Container>
              <Top mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

export default MobileContainer;
