import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import ProgressCircle from 'react-native-progress-circle';

// Design
import * as Utils from './../../components/Utils';

// Utils
import Colors from './../../utils/Style/Colors';

// https://awesomeopensource.com/project/JesperLekland/react-native-svg-charts-examples

export const ListItem = ({item}) => {
  const {title, usedData, totalData, dataType, onPress} = item;
  const percentageAvailable = ((totalData - usedData) / totalData) * 100;
  return (
    <TouchableOpacity onPress={onPress} style={{paddingBottom: 10, flex: 1}}>
      <Utils.Row
        background="#000"
        padding={10}
        borderRadius={6}
        flex={1}
        background={Colors.secondaryBackground}>
        <Utils.View flex={1}>
          <Utils.View paddingBottom={6}>
            <Utils.Text size={20} color={Colors.white}>
              {title}
            </Utils.Text>
          </Utils.View>
          <Utils.Row align="center">
            <Utils.View paddingRight={20} flex={0.4}>
              <Utils.Text size={12} numberOfLines={1} color={Colors.black}>
                Disponíveis: {`${totalData - usedData} ${dataType}`}
              </Utils.Text>
              <Utils.Text size={12} numberOfLines={1} color={Colors.black}>
                Consumidos: {`${usedData} ${dataType}`}
              </Utils.Text>
            </Utils.View>
            <Utils.View flex={0.3}>
              <ProgressCircle
                percent={100 - percentageAvailable}
                radius={20}
                borderWidth={3}
                color={Colors.red}
                shadowColor="#6959CD"
                bgColor={Colors.secondaryBackground}>
                <Utils.Text size={8} color={Colors.black}>
                  {percentageAvailable}%
                </Utils.Text>
              </ProgressCircle>
            </Utils.View>
          </Utils.Row>
        </Utils.View>
      </Utils.Row>
    </TouchableOpacity>
  );
};

ListItem.prototype = {
  title: PropTypes.string.isRequired,
  usedData: PropTypes.number.isRequired,
  totalData: PropTypes.number.isRequired,
  dataType: PropTypes.string,
  onPress: PropTypes.func,
};

ListItem.defaultProps = {
  dataType: 'GB',
  onPress: () => {},
};

export const List = ({list}) => {
  return (
    <FlatList
      data={list}
      renderItem={ListItem}
      keyExtractor={(item, index) => `${item.title}-${index}`}
    />
  );
};

List.prototype = {
  list: PropTypes.array.isRequired,
};
