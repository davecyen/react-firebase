import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility,
} from 'semantic-ui-react';

import HomepageHeading from '../Header/HomepageHeading';


/* Heads up!
 * Neither Semantic UI, nor Semantic UI React don't offer a responsive navbar, hover it can be easily implemented.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state
    const { activeItem } = this.state

    return (
      <Responsive {...Responsive.onlyComputer}>
        <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
          <Segment inverted textAlign='center' style={{ minHeight: 700, padding: '1em 0em' }} vertical>
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing
              secondary
              style={{ backgroundColor: fixed ? 'white' : ''}}
              size='large'
            >
              <Container>
                <Menu.Item as='a'>Housesplit</Menu.Item>
                <Menu.Item name='howItWorks' active={activeItem === 'howItWorks'} onClick={this.handleItemClick} as='a'>How it works</Menu.Item>
                <Menu.Item name='faq' active={activeItem === 'faq'} onClick={this.handleItemClick} as='a'>FAQ</Menu.Item>
                <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick} as='a'>About</Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted={!fixed}>Log in</Button>
                  <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>Sign Up</Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

export default DesktopContainer;
