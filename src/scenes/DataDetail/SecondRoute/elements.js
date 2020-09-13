import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

// Design
import * as Utils from './../../../components/Utils';

// Utils
import Colors from './../../../utils/Style/Colors';
import {formatDate} from './../../../utils/numberUtils';

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
  dateObj: PropTypes.objectOf(PropTypes.string).isRequired,
};

DateSelector.defaultProps = {
  onPress: () => {},
};

export const HistoryItem = ({item}) => {
  const {date, voice, data, dataType} = item;
  const dateObj = new Date(date);
  const formatedDate = formatDate(dateObj);

  return (
    <Utils.View
      marginTop={16}
      padding={12}
      background="#0ef500"
      borderRadius={6}>
      <Utils.Row justify="space-between">
        <Utils.Text color="black">Consumidos: </Utils.Text>
        <Utils.Text size={12}>
          Data:{' '}
          {`${formatedDate.day}/${formatedDate.month}/${formatedDate.year}`}
        </Utils.Text>
      </Utils.Row>
      <Utils.Row align="center" justify="space-around">
        <Utils.Row align="center">
          <Utils.Text color="black">Minutos:</Utils.Text>
          <Utils.Text color="black" size={14}>
            {voice}
          </Utils.Text>
        </Utils.Row>
        <Utils.Row align="center">
          <Utils.Text color="black">Dados:</Utils.Text>
          <Utils.Text color="black" size={14}>
            {data} {dataType}
          </Utils.Text>
        </Utils.Row>
      </Utils.Row>
    </Utils.View>
  );
};
