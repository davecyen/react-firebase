import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Container,
  Header,
  Icon,
} from 'semantic-ui-react';

/* eslint-disable react/no-multi-comp */
/* Heads up! This uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const Top = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='Shared home ownership'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content='Co-own a home at a fraction of the cost, hassle-free.'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Button primary size='huge'>
      Get Started
      <Icon name='right arrow' />
    </Button>
  </Container>
)

Top.propTypes = {
  mobile: PropTypes.bool,
}

export default Top;
