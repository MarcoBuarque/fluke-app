import React from 'react';
import PropTypes from 'prop-types';

// Design
import {GoBack} from './elements';
import * as Utils from './../Utils';

export const Header = ({title, onGoBack, rightComponent}) => {
  return (
    <Utils.Container>
      <Utils.Row>
        <Utils.Text size={22}>{title}</Utils.Text>
        {!!onGoBack && <GoBack onPress={onGoBack} />}
        {!!rightComponent && rightComponent()}
      </Utils.Row>
    </Utils.Container>
  );
};

Header.prototype = {
  title: PropTypes.string.isRequired,
  onGoBack: PropTypes.func,
  rightComponent: PropTypes.func,
};

export default Header;
