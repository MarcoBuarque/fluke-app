import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

// Design
import * as Utils from './../../../components/Utils';

// Utils
import Colors from './../../../utils/Style/Colors';

export const DateSelector = ({label, onPress, dateObj}) => (
  <Utils.Row align="center" background="black" padding={6} borderRadius={6}>
    <Utils.Text secondary={true} size={14}>
      {label}
    </Utils.Text>
    <TouchableOpacity onPress={onPress}>
      <Utils.Row paddingLeft={6}>
        <Utils.Text color={Colors.white} size={14}>
          {`${dateObj.day}/${dateObj.month}/${dateObj.year}`}
        </Utils.Text>
        <Utils.View paddingLeft={6}>
          <Icon
            name="chevron-down-outline"
            color={Colors.secondaryText}
            size={16}
          />
        </Utils.View>
      </Utils.Row>
    </TouchableOpacity>
  </Utils.Row>
);

DateSelector.prototype = {
  label: PropTypes.string,
  onPress: PropTypes.func,
  dateObj: PropTypes.objectOf(PropTypes.number).isRequired,
};

DateSelector.defaultProps = {
  onPress: () => {},
};
