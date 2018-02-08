import React from 'react';
import PropTypes from 'prop-types';

import MobileContainer from './MobileContainer';
import DesktopContainer from './DesktopContainer';

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

export default ResponsiveContainer;
