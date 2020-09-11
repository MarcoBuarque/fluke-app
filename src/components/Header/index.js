import React from 'react';
import PropTypes from 'prop-types';

// Design
import {GoBack} from './elements';
import * as Utils from './../Utils';

export const Header = ({title, onGoBack}) => {
  return (
    <Utils.Container>
      <Utils.Text size={22}>{title}</Utils.Text>
      {onGoBack && <GoBack onPress={onGoBack} />}
    </Utils.Container>
  );
};

Header.prototype = {
  title: PropTypes.string.isRequired,
  onGoBack: PropTypes.func,
};

export default Header;
